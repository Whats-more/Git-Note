<template>
  <div class="max-w-reading h-auto p-6 bg-white border border-gray-200 rounded-md shadow-sm overflow-y-auto box-border">
    <article class="markdown-body">
      <MarkdownTitle class="mt-0 mb-4">{{ title }}</MarkdownTitle>
      
      <p class="text-base leading-relaxed text-gray-700 mb-3">
        The reading width component constrains an element's maximum width to an optimal reading measure. This improves readability for long-form text content by preventing lines from becoming too wide...
      </p>

      <p class="text-base leading-relaxed text-gray-700 mb-0.5">
        Apply the <code class="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono text-pink-600">.reading-width</code> class to any container whose content should be constrained to a comfortable reading width. This page's text uses this very class!
      </p>
    </article>
  </div>
</template>

<script setup>
import MarkdownTitle from './UI/MarkdownTitle.vue';

const props = defineProps({
  containsArgument: {
    type: Boolean,
    required: true
  }
});

const title = ref('Reading width');
</script>
