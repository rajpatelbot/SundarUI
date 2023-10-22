# Basic Inputs

Include input fields for text, password, and mobile number.

## Demo

<div ref="el" />

<script setup>
import { createElement } from 'react'
import { createRoot } from 'react-dom/client'
import { ref, onMounted } from 'vue'
import BasicInputs from '../../../../src/components/form-elements/inputs/BasicInputs.tsx'

const el = ref()

onMounted(() => {
   const root = createRoot(el.value)
   root.render(createElement(BasicInputs, {}, null))
})
</script>

**Code Snippets**
::: details Basic Inputs
<<< @/../src/components/form-elements/inputs/BasicInputs.tsx
:::
