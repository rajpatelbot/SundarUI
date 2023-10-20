# Text Buttons

Buttons with only text and without any background color or outline.

## Demo

<div ref="el" />

<script setup>
import { createElement } from 'react'
import { createRoot } from 'react-dom/client'
import { ref, onMounted } from 'vue'
import TextButtons from '../../../src/components/buttons/TextButtons.tsx'

const el = ref()

onMounted(() => {
   const root = createRoot(el.value)
   root.render(createElement(TextButtons, {}, null))
})
</script>

**Code Snippets**
::: details Text Buttons
<<< @/../src/components/buttons/TextButtons.tsx
:::
