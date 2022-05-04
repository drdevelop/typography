<template>
  <div :style="{ width: '300px', border: '1px solid red', boxSizing: 'initial' }">
    <Paragraph
      :ellipsis="{
        expandable: true,
        packupable: true,
        rows: 2,
        expandStyle: {
          color: 'red',
        },
        packupStyle: {
          color: 'green',
        },
      }"
    >
      I may be the first row of data displayed in this text box hey, I may be the second row of data displayed in this text box, I may be the third row of data displayed in this text box
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
