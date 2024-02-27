<template>
   <div>
      <JonGalley :images="(Object.assign({}, images) as any)"/>
   </div>
</template>

<script lang="ts" setup>
import * as images from '@/assets/images';
import JonGalley from '@/components/JonGallery.vue'
</script>