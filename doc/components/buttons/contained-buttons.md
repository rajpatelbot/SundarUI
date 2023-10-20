# Contained Buttons

Buttons with background color.

## Demo

<div ref="el" />

<script setup>
import { createElement } from 'react'
import { createRoot } from 'react-dom/client'
import { ref, onMounted } from 'vue'
import ContainedButtons from '../../../src/components/buttons/ContainedButtons.tsx'

const el = ref()

onMounted(() => {
   const root = createRoot(el.value)
   root.render(createElement(ContainedButtons, {}, null))
})
</script>

**Code Snippets**
::: details Contained Buttons
<<< @/../src/components/buttons/ContainedButtons.tsx
:::
