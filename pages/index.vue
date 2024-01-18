<script lang="ts" setup>
const { awesome } = useAppConfig()
definePageMeta({ layout: 'page' })
useHead({ titleTemplate: '', title: awesome?.name || 'HTH Prod' })
</script>

<template>
  <AwesomeWelcome :with-alert="true" />
</template>
