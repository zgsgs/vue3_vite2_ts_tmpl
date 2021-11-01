<script setup lang="ts">
import { computed } from 'vue';
/**
 * TS泛型写法 简洁 不能设置默认值
 */
// const props = defineProps<{
//   color: string,
//   size?: string,
//   backgroundColor?: string,
//   num: number,
//   justify: string,
//   algin: string,
//   gap: number | string
// }>()

/**
 * 定义值写法 繁琐 可以设置默认值
 */
const props =
  defineProps({
    numberOfChildren: {
      type: Number,
      default: 1
    },
    direction: {
      type: String,
      default: 'row'
    },
    justify: {
      type: String,
      default: 'center'
    },
    algin: {
      type: String,
      default: 'center'
    },
    wrap: {
      type: Boolean,
      default: false
    },
    spacing: {
      type: Number,
      default: 2
    },
    size: {
      type: String,
      default: '10px'
    },
    color: {
      type: String,
      require: true,
      default: '#fff'
    },
    backgroundColor: {
      type: String,
      default: ''
    },
  })

const class1 = computed(() => ({
  'storybook-button-wrap': true,
}))

const class2 = computed(() => ({
  'storybook-button': true,
  [`storybook-button--${props.size || 'medium'}`]: true,
}))

const style1 = computed(() => ({
  display: 'flex',
  flexDirection: props.direction,
  flexWrap: props.wrap ? 'wrap' : 'nowrap',
  justifyContent: props.justify,
  alignItems: props.algin,
  gap: `${props.spacing * 0.25}rem`,
}))

const style2 = computed(() => ({
  color: props.color,
  backgroundColor: props.backgroundColor,
}))

</script>

<template>
  <ul :class="class1" :style="style1">
    <li v-for="i in numberOfChildren" :key="i">
      <div :class="class2" :style="style2">{{ i }}</div>
    </li>
  </ul>
</template>

<style scoped>
.storybook-button-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
}
.storybook-button {
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  border-radius: 3px;
  border: 1px solid #ddd;
  color: #fff;
  background-color: #000;
}
.storybook-button--medium {
  color: white;
  background-color: #1ea7fd;
  width: 100px;
  height: 100px;
  line-height: 100px;
}
</style>
