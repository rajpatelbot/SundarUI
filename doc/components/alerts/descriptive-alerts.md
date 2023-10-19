# Descriptive Alerts

Alerts with icons, messages and description.

::: tip
Here, the `react-icons` NPM package is used. You can use it as your choice.
:::

## Demo

<div ref="el" />

<script setup>
import { createElement } from 'react'
import { createRoot } from 'react-dom/client'
import { ref, onMounted } from 'vue'
import DescriptiveAlerts from '../../../src/components/alerts/DescriptiveAlerts.tsx'

const el = ref()

onMounted(() => {
   const root = createRoot(el.value)
   root.render(createElement(DescriptiveAlerts, {}, null))
})
</script>

**Code Snippets**
::: details IconsAlerts.tsx
<<< @/../src/components/alerts/DescriptiveAlerts.tsx
:::
