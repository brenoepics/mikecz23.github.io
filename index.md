---
title: Hollow Knight – Čeština
sidebar: false
---
<script setup lang="ts">
const people = {
  lead: [
    { name: "MikeCZ", role: "Vedení projektu"}
  ],
  l10n: [
    { name: "Toasat165", role: "Překlad"},
    { name: "DesoloSVK", role: "Překlad"},
    { name: "UwU-master", role: "Překlad"},
    { name: "LucianoLukin", role: "Překlad"},
    { name: "Yohnny", role: "Překlad"},
    { name: "Atoschi", role: "Překlad"},
    { name: "Manz_z", role: "Překlad"},
    { name: "", role: ""},
    { name: "UwU-master", role: "Korektura"},
    { name: "Manz_z", role: "Korektura"},
    { name: "SeymoreClavage", role: "Korektura"},
    { name: "Bendalf21", role: "Korektura"},
  ],
 support: [
    { name: "-", role: "Technika, fonty"},
    { name: "-", role: "Grafika"},
  ],
  partners: [
    { name: "HaiseT", role: "Mediální partner"},
    { name: "PatrikTuri", role: "Mediální partner"}
  ]
};
</script>

<div style="border-radius: 16px; overflow: hidden; margin-bottom: 16px;">
  <img src="https://i.imgur.com/k3FwNSO.jpg">
</div>

# Hollow Knight – Čeština

![Stav překladu](https://img.shields.io/badge/přeloženo-100%25-darkgreen?style=for-the-badge) 
![Stav překladu](https://img.shields.io/badge/korektura-99%25-gold?style=for-the-badge) 
![Stav překladu](https://img.shields.io/badge/testování-100%25-blue?style=for-the-badge)

Vítej na profilu fanouškovského překladu hry Hollow Knight.


## Členové týmu

Na překladu se podílejí následující lidé:

<PTeamMembers :members="people.lead" />

<PTeamMembers :members="people.l10n" />

<PTeamMembers :members="people.support" />

<PTeamMembers :members="people.partners" />
