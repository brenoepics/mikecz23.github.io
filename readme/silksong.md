---
title: Hollow Knight Silksong – Čeština
sidebar: false
author: MikeCZ
---

<script setup>
import { onMounted } from 'vue'
import './components/index.css'
  onMounted(() => {
    import('./components/icon/')
    import('./components/button/')
    import('./components/checkbox/')
    import('./components/dialog/').then((res)=> {
        window.dialog = res.default
    })
    import('./components/message/').then((res)=> {
        window.message = res.default
    })
  })
</script>

# Hollow Knight: Silksong

::: warning UPOZORNĚNÍ
Nezavazuju se k překladu hry. Jen o ní uvažuji. Jestli jí chceš udělat, posluž si ale dej mi to prosím vědět dolů do komentářů. V komentářích je i moje aktuální stanovisko.
:::

---

<script type="module">
    import dialog from './components/dialog/index.js';
    dialog.info('Nevím co zde hledáš když hra ještě nevyšla.');
</script>
<xy-dialog open>
    <div>dialog</div>
</xy-dialog>
