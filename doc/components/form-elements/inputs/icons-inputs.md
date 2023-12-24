# Icons Inputs

Include input fields for text, password, and mobile number with icons.

## Demo

<div ref="el" />

<script setup>
import { createElement } from 'react'
import { createRoot } from 'react-dom/client'
import { ref, onMounted } from 'vue'
import IconsInputs from '../../../../src/components/form-elements/inputs/IconsInputs.tsx'

const el = ref()

onMounted(() => {
   const root = createRoot(el.value)
   root.render(createElement(IconsInputs, {}, null))
})
</script>

**Code Snippets**
::: details Basic Inputs
<<< @/../src/components/form-elements/inputs/IconsInputs.tsx
:::
