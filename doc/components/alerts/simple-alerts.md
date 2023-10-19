# Simple Alerts

Alerts with no icons and no description.

## Demo

<div ref="el" />

<script setup>
import { createElement } from 'react'
import { createRoot } from 'react-dom/client'
import { ref, onMounted } from 'vue'
import SimpleAlerts from '../../../src/components/alerts/SimpleAlerts.tsx'

const el = ref()

onMounted(() => {
   const root = createRoot(el.value)
   root.render(createElement(SimpleAlerts, {}, null))
})
</script>

**Code Snippets**
::: details SimpleAlerts
<<< @/../src/components/alerts/SimpleAlerts.tsx
:::
