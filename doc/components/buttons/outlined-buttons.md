# Outlined Buttons

Buttons with text, outline and without any background color.

## Demo

<div ref="el" />

<script setup>
import { createElement } from 'react'
import { createRoot } from 'react-dom/client'
import { ref, onMounted } from 'vue'
import OutlinedButtons from '../../../src/components/buttons/OutlinedButtons.tsx'

const el = ref()

onMounted(() => {
   const root = createRoot(el.value)
   root.render(createElement(OutlinedButtons, {}, null))
})
</script>

**Code Snippets**
::: details Contained Buttons
<<< @/../src/components/buttons/OutlinedButtons.tsx
:::
