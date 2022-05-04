# @typography-org/vue

## install
npm i @typography-org/vue -S

## fast use

```vue
<template>
  <div :style="{ width: '300px', border: '1px solid red', boxSizing: 'initial' }">
    <Paragraph
      :ellipsis="{
        rows: 2,
        expandable: true,
        packupable: true,
      }"
    >
      I may be the first row of data displayed in this text box hey, I may be the second row of data displayed in this text box, I may be the third row of data displayed in this text box
    </Paragraph>
  </div>
</template>

<script lang="ts">
import Paragraph from "@typography-org/vue";

export default {
  components: {
    Paragraph: Paragraph,
  },
};
</script>
```

## Community
### React Components
[@typography-org/react](https://www.npmjs.com/package/@typography-org/react)

### Native
[@typography-org/native](https://www.npmjs.com/package/@typography-org/native)
