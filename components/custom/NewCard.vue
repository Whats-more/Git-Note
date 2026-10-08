<template>
  <Card class="border-dashed">
    <CardHeader class="flex flex-row items-center justify-start space-y-0">
      <CardTitle class="text-2xl font-bold">
        <SquarePlus class="inline-block w-7 h-7 align-middle mb-1.5 mr-1" /> New Card
      </CardTitle>
    </CardHeader>
  </Card>
</template>

<script setup lang="ts">
import { SquarePlus } from 'lucide-vue-next';
</script>
