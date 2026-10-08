<template>
  <!-- 
    总宽度 685px，总高度 685px（正方形）
    p-6 = 24px 内边距
    box-border：让 685px 包含 padding，内部内容宽度自动为 685 - 24*2 = 637px
    overflow-y-auto：内容超出 685px 高度时在卡片内部滚动
  -->
  <div class="max-w-reading h-auto p-6 bg-white border border-gray-200 rounded-md shadow-sm overflow-y-auto box-border">
    <article class="markdown-body">
      
      <!-- H1 标题：约 2.5rem，上下边距使用 32px (mt-8) 和 16px (mb-4) -->
      <Title class="mt-0 mb-4">Reading width</Title>

      <!-- 正文段落：16px 字号，1.625 行高，段间距 16px -->
      <p class="text-base leading-relaxed text-gray-700 mb-4">
        The reading width component constrains an element's maximum width to an optimal reading measure. This improves readability for long-form text content by preventing lines from becoming too wide...
      </p>

      <p class="text-base leading-relaxed text-gray-700 mb-4">
        Apply the <code class="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono text-pink-600">.reading-width</code> class to any container whose content should be constrained to a comfortable reading width. This page's text uses this very class!
      </p>


      <!-- H2 标题：约 1.5rem，上边距 32px (mt-8)，下边距 16px (mb-4) -->
      <Title class="mt-8 mb-4">Usage</Title>

      <p class="text-base leading-relaxed text-gray-700 mb-4">
        Use <code class="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono text-pink-600">.reading-width</code> within a container that is centered in the viewport or a parent element...
      </p>

      <Title class="mt-8 mb-4">Recommended implementation</Title>

      <p class="text-base leading-relaxed text-gray-700 mb-4">
        Use <code class="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono text-pink-600">.reading-width</code> within a container that is centered in the viewport or a parent element. Pair it with <code class="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono text-pink-600">.margin-inline-auto</code> to automatically center the content horizontally. If used in a grid, ensure the grid column containing the <code class="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono text-pink-600">.reading-width</code> container uses the <code class="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono text-pink-600">minmax</code> function...
      </p>

    </article>
  </div>
</template>

<script setup>
import Title from './UI/Title.vue';

// 这里可以处理代码高亮逻辑或从接口获取内容
</script>
