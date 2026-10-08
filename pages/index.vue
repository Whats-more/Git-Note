<template>
  <Title>PlaceHolder</Title>
  <div class="grid grid-cols-[1fr_auto_1fr] gap-4">
    <div class="flex w-full max-w-lg ml-auto">
      <ArgumentCard :containsArgument="false" />
    </div>
    <div class="flex items-stretch">
      <Separator orientation="vertical" class="bg-gray-300 w-[1px]" />
    </div>
    <div class="flex w-full max-w-lg mr-auto">
      <ArgumentCard :containsArgument="true" />
    </div>
  </div>
  
</template>

<script setup lang="ts">
import { Activity, ArrowUpRight, CreditCard, DollarSign, Users } from 'lucide-vue-next';
import ArgumentCard from '~/components/custom/ArgumentCard.vue';

const isHovered = ref(false);
const isActive = ref(false);
</script>
