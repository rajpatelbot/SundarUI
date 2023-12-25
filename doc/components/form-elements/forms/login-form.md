# Login Form

Include the login form with logo

## Demo

<div ref="el" />

<script setup>
import { createElement } from 'react'
import { createRoot } from 'react-dom/client'
import { ref, onMounted } from 'vue'
import LoginForm from '../../../../src/components/form-elements/forms/LoginForm.tsx'

const el = ref()

onMounted(() => {
   const root = createRoot(el.value)
   root.render(createElement(LoginForm, {}, null))
})
</script>

**Code Snippets**
::: details Login Form
<<< @/../src/components/form-elements/forms/LoginForm.tsx
:::
