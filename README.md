# typography

[@typography-org/native](https://github.com/drdevelop/typography/tree/main/packages/typography-native)  
[@typography-org/react](https://github.com/drdevelop/typography/tree/main/packages/typography-react)  
[@typography-org/vue](https://github.com/drdevelop/typography/tree/main/packages/typography-vue)  

## experience for module federation (exciting)

1. module federation provider  
cd packages/typography-native && yarn && yarn run federation

2. module federation consumer
cd package/typography-react && yarn && yarn run dev

**final**: if you modify any code in `packages/typography-native/src`, the app in `packages/typography-react` will sync the newest code for import xxx from '@typography-org/native' after reload browser
