<template>
  <div class="">
    <template v-if="isUrlArray">
      <div v-for="item in data">
        <span>{{ item.title }}</span>
        <ElLink :href="item.url" target="_blank">
          {{ data }}
        </ElLink>
      </div>
    </template>

    <ElLink v-else :href="data" target="_blank"> {{ data }} </ElLink>
  </div>
</template>

<script lang="ts" setup>
import { h } from "vue";
import { ElLink } from "element-plus";
type UrlData = string | { title: string; url: string }[];

const props = defineProps<{ data: UrlData }>();

const isUrlArray = computed(() => Array.isArray(props.data));

const UrlLink = () => {
  if (typeof props.data === "string") {
    return h(ElLink, [props.data], { href: props.data });
  }
  return h(props.data.map((item) => h(ElLink, [item.url], { href: item.url })));
};
</script>

<style lang="scss" scoped></style>
