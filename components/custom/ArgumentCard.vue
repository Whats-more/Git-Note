<template>
  <div @click="isExpanded = true"
    class="hover:border-primary max-w-reading h-auto p-6 bg-white border border-gray-200 rounded-md shadow-sm overflow-y-auto box-border">
    <article class="markdown-body">
      <MarkdownTitle class="mt-0 mb-0" :class="{ quoted: !containsArgument }">{{ title }}</MarkdownTitle>
      <div v-if="containsArgument">
        <p class="text-base leading-relaxed text-gray-700 mt-4 mb-3">
          The reading width component constrains an element's maximum width to an optimal reading measure. This improves
          readability for long-form text content by preventing lines from becoming too wide...
        </p>

        <p class="text-base leading-relaxed text-gray-700 mb-0.5">
          Apply the <code
            class="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono text-pink-600">.reading-width</code> class to any
          container whose content should be constrained to a comfortable reading width. This page's text uses this very
          class!
        </p>
      </div>
      <div v-if="0">
        <p class="text-base leading-relaxed text-gray-700 mt-4 mb-0.5">
          Add your own arguments...
        </p>
      </div>
    </article>
    <div v-if="isExpanded" class="  ">
      <Separator class="flex w-full bg-gray-300 h-[1px] mt-6 mb-6" />
      <CommitTree class="w-full" />
      <Separator class="flex w-full bg-gray-300 h-[1px] mt-6 mb-6" />
      <article class="markdown-body">
        <h1 class="text-2xl mt-0 mb-3">Changelog</h1>
        <textarea
  class="
    w-full
    -mx-0 px-3 py-2 
    transition-[height] duration-200                         /* 内边距：紧凑但不挤 */
    text-sm leading-relaxed            /* 字号和行高 */
    text-gray-900 placeholder:text-gray-400   /* 文字和占位符 */
    bg-white
    border border-gray-300 rounded-md  /* 边框和圆角 */
    outline-none                        /* 去掉浏览器默认 focus 轮廓 */
    focus:border-primary focus:ring-2 focus:ring-primary/20
    transition-colors duration-150
    resize-y
  "
></textarea>
      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
import MarkdownTitle from './UI/MarkdownTitle.vue';

const props = withDefaults(defineProps<{
  containsArgument: boolean,
  title: string,
  content: string
}>(), {
  containsArgument: false,
  title: 'Reading width'
});

const title = ref(props.title);

const isExpanded = ref(false);

</script>

<style scoped>
.quoted {
  ::before {
    content: '"';
    color: #6b7280;
    /* Tailwind's gray-500 */
  }

  ::after {
    content: '"';
    color: #6b7280;
    /* Tailwind's gray-500 */
  }
}
</style>