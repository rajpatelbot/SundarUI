# Icons Buttons

Buttons with icons.

::: tip
Here, the `react-icons` NPM package is used. You can use it as your choice.
:::

## Demo

<div ref="el" />

<script setup>
import { createElement } from 'react'
import { createRoot } from 'react-dom/client'
import { ref, onMounted } from 'vue'
import IconsButtons from '../../../src/components/buttons/IconsButtons.tsx'

const el = ref()

onMounted(() => {
   const root = createRoot(el.value)
   root.render(createElement(IconsButtons, {}, null))
})
</script>

**Code Snippets**
::: details Contained Buttons
<<< @/../src/components/buttons/IconsButtons.tsx
:::
