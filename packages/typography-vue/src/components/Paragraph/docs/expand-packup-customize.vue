<template>
  <div :style="{ width: '300px', border: '1px solid red', boxSizing: 'initial' }">
    <Paragraph
      :ellipsis="{
        rows: 2,
        expandable: true,
        packupable: true,
      }"
    >
      <template v-slot:suffix>
        <span>查看更多</span>
      </template>
      <template v-slot:packup>
        <span>收起按钮</span>
      </template>
      我可能是展示在这个文本框中的第一行数据嘿，我可能是展示在这个文本框中的第二行数据，我可能是展示在这个文本框中的第三行数据
    </Paragraph>
  </div>
</template>

<script lang="ts">
import Paragraph from "../index.vue";

export default {
  components: {
    Paragraph: Paragraph,
  },
};
</script>
