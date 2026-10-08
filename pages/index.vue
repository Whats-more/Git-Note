<template>
  <Title>PlaceHolder</Title>
  <div class="text-center text-2xl font-bold mt-3">
    Custom Title
  </div>
  <Separator class="w-full bg-gray-300 h-[1px]"/>
  <div class="grid grid-cols-[1fr_auto_1fr] gap-4">
    <div class="flex flex-col gap-4 w-full max-w-lg ml-auto">
      <ArgumentCard :containsArgument="false" />
      <ArgumentCard :containsArgument="false" />
      <ArgumentCard :containsArgument="false" />
      <ArgumentCard :containsArgument="false" />
      <NewCard />
    </div>
    <div class="flex items-stretch">
      <Separator orientation="vertical" class="bg-gray-300 w-[1px]" />
    </div>
    <div class="flex flex-col gap-4 w-full max-w-lg mr-auto">
      <ArgumentCard :containsArgument="true" />
      <ArgumentCard :containsArgument="true" />
    </div>
  </div>
  
</template>

<script setup lang="ts">
import { Activity, ArrowUpRight, CreditCard, DollarSign, Users } from 'lucide-vue-next';
import NewCard from '~/components/custom/NewCard.vue';
import ArgumentCard from '~/components/custom/ArgumentCard.vue';

const isHovered = ref(false);
const isActive = ref(false);
</script>
