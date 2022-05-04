<template>
  <div :style="{ width: '300px', border: '1px solid red', boxSizing: 'initial' }">
    <Paragraph
      :ellipsis="{
        expandable: true,
        packupable: true,
        rows: 2,
      }"
    >
      我可能是展示在这个文本框中的第一行数据嘿，我可能是展示在这个文本框中的第二行数据。
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
