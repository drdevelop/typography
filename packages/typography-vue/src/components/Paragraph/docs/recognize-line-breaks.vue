<template>
  <div :style="{ width: '300px', border: '1px solid red', boxSizing: 'initial' }">
    <Paragraph
      :ellipsis="{
        recognizeLineBreaks: true,
        expandable: true,
        packupable: true,
        rows: 2,
      }"
    >
      接下来是换行符\n我可能是展示在这个文本框中的第二行数据，我可能是展示在这个文本框中的第三行数据
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
