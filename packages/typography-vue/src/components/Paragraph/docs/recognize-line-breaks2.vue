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
      接下来是换行符\n 接下来是换行符\n第一行数据嘿
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
