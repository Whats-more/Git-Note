<template>
    <div>
        <h1
        :contenteditable="isEditing"
        @click="startEdit"
        @blur="stopEdit"
        @keydown.enter.exact.prevent="stopEdit"
        @keydown.esc.exact.prevent="stopEdit"
        class="w-fit max-w-full text-3xl text-gray-900
            border-none outline-none
            decoration-2
            hover:underline
            focus:underline">
            <slot />
        </h1>
    </div>
</template>

<script setup lang="ts">
const isEditing = ref(false);
const startEdit = () => {
    isEditing.value = true;
};
const stopEdit = () => {
    isEditing.value = false;
};
</script>