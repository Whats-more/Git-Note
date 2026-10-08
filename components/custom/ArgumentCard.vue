<template>
    <Card @mouseenter="isHovered = true" @mouseleave="isHovered = false" @click="isActive = !isActive" :class="{ 'border-primary': isHovered }" class="w-full h-auto max-h-60 flex flex-col cursor-pointer">
        <template v-if="props.containsArgument">
            <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle class="text-2xl font-bold">
                Case A
                </CardTitle>
            </CardHeader>
            <CardContent class="flex-1 min-h-0 flex flex-col">
                <div class="overflow-y-auto flex-1 min-h-0 text-sm font-medium">
                This is a placeholder for the content of Case A.<br>
                Case A is very important, because this is the first case I take care of.<br>
                I need to make sure I handle this case properly.<br>
                It is also important to note that Case A has many sub-cases that need to be addressed.<br>
                But I can split this later, so for now, I will just focus on the main case.<br>
                AI is so powerful U know
                </div>
            </CardContent>
        </template>
        <template v-else>
            <CardHeader class="flex flex-row items-center justify-center space-y-0 pb-2">
                <CardTitle class="text-2xl font-bold">
                Case B
                </CardTitle>
            </CardHeader>
        </template>
    </Card>
</template>

<script setup lang="ts">
const isHovered = ref(false);
const isActive = ref(false);
const props = defineProps({
    containsArgument: {
        type: Boolean,
        required: true
    }
});
</script>