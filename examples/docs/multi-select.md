<script>
  export default {
    data() {
      return {
        selectValue: ['1', '2'],
        multiSelectOptions: [{
          value: '1',
          label: '北京',
        }, {
          value: '2',
          label: '上海',
        }],
      };
    },
    methods: {
      handleChangeSelect(newValue) {
        this.selectValue = newValue;
      },
    },
  };
</script>
<style>
</style>
## 选项卡

### 例子

:::demo

```html
<template>
  <div class="example-area">
    <h2>基础用法</h2>
    <div class="example__info">
      全选
    </div>
    <div class="example__main">
      <multi-select
        placeholder="配送中心"
        :value = "selectValue"
        @input="handleChangeSelect"
      >
        <multi-option
          v-for="item in multiSelectOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></multi-option>
      </multi-select>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        selectValue: ['1', '2'],
        multiSelectOptions: [{
          value: '1',
          label: '北京',
        }, {
          value: '2',
          label: '上海',
        }],
      };
    },
    methods: {
      handleChangeSelect(newValue) {
        this.selectValue = newValue;
      },
    },
  };
</script>

```

:::

### Avue-tabs Option Attributes

| 参数        | 说明                                                            | 类型   | 可选值      | 默认值 |
| ----------- | --------------------------------------------------------------- | ------ | ----------- | ------ |
| label       | 选项卡显示名称                                                  | String | -           | -      |
| prop        | 选项卡别名                                                      | String | -           | -      |
| description | 选项卡描述                                                      | String | -           | -      |
| icon        | 选项卡图标                                                      | String | -           | -      |

### Avue-tabs Events

| 事件名 | 说明                          | 参数 |
| ------ | ----------------------------- | ---- |
| change | 返回当前选项卡的整体对象      | item |


### Avue-tabs Methods

| 方法名 | 说明	 | 参数 |
| ------ | ----------------- |----------- |
|changeTabs|传入标签的序号即可切换|active|

### Avue-tabs Scoped Slot

| name   | 说明                          |
| ------ | ----------------------------- |
| after  | 内容之前的卡槽                |
| brfore | 内容之后的卡槽                |
| 说明   | 每个选项卡的卡槽               |
