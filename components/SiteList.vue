<template>
  <div>
    <ElTable :data="data">
      <ElTableColumn prop="name" label="名称"> </ElTableColumn>
      <ElTableColumn label="地址">
        <template #default="scoped">
          <!-- <ElLink :href="scoped.row.url" target="_blank">
            {{ scoped.row.url }}
          </ElLink> -->

          <SiteUrl :data="scoped.row.url" />
        </template>
      </ElTableColumn>
    </ElTable>
  </div>
</template>

<script lang="ts" setup>
import { ElTable, ElTableColumn, ElLink } from "element-plus";

const data = [
  { name: "notion", url: "https://notion.so/" },
  { name: "掘金", url: "https://juejin.cn/" },
  {
    name: "Element Plus",
    url: [
      { title: "国际", url: "https://element-plus.org/" },
      { title: "国内Gitee", url: "https://element-plus.gitee.io/" },
    ],
  },
];
</script>
