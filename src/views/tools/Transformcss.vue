<template>
  <table>
    <tbody>
      <tr>
        <td>
          <textarea id="left" name cols="30" rows="10" v-model="testText"></textarea>
        </td>
        <td>
          <div>转换设置：</div>
          <div>
            从
            <input type="text" v-model="from">
          </div>
          <div>
            到
            <input type="text" v-model="to">
          </div>
          <div>
            1{{to}} =
            <input maxlength="3" type="text" v-model="ratio">{{from}}
          </div>
          <!-- <div>转换方式：</div> -->
          <div class="convert" @click="transformTo">开始转换 ></div>
        </td>
        <td>
          <textarea id="right" name cols="30" rows="10" v-model="result"></textarea>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  data() {
    return {
      testText: 'font-size:20.3213px;width: 300px;height: 100PX;border: 0 0 1px 0;',
      from: 'px',
      to: 'rem',
      ratio: 16,
      result: null,
      arr: [1, 2, 3],
    };
  },
  methods: {
    transformTo() {
      const originType = this.from.toLowerCase();
      const targetType = this.to.toLowerCase();
      let content = document.querySelector('#left').value;
      const reg = new RegExp(`[^\\s|:]+(${originType})`, 'gi');
      const arr = content.match(reg) || [];
      arr.forEach((e) => {
        const eachResult = parseFloat(e) / this.ratio + targetType;
        content = content.replace(e, eachResult);
      });
      this.result = content;
      console.log(content, arr);
    },
  },
};
</script>
<style lang="scss" scoped>
* {
    margin: 0;
    padding: 0;
    outline: none;
    -webkit-appearance: none;
}
html, body {
    margin: 0;
}
table {
    text-align: center;
    width: 100%;
}
table textarea {
    border: 1px solid gray;
    box-sizing: border-box;
    min-height: 300px;
    width: 100%;
}
input {
    border: 0;
    width: 30px;
    font-size: 16px;
    text-align: center;
    border-bottom: 1px solid black;
}
</style>
