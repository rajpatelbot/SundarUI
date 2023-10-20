# Icons Alerts

Alerts with icons, alert messages and without description.

::: tip
Here, the `lucide-react` NPM package is used. You can use it as your choice.
:::

## Demo

<div ref="el" />

<script setup>
import { createElement } from 'react'
import { createRoot } from 'react-dom/client'
import { ref, onMounted } from 'vue'
import IconsAlerts from '../../../src/components/alerts/IconsAlerts.tsx'

const el = ref()

onMounted(() => {
   const root = createRoot(el.value)
   root.render(createElement(IconsAlerts, {}, null))
})
</script>

**Code Snippets**
::: details IconsAlerts.tsx
<<< @/../src/components/alerts/IconsAlerts.tsx
:::
