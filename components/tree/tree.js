// pages/test/test.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    treeData: {
      type: Array,
      value: []
    }
  },
  observers: {
    'treeData': function(params) {
      console.log(params);
      this.setData({
        tree: params
      })
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    tree: []
  },
  observers: {
    'treeData': function(params) {
      console.log(params);
      this.setData({
        tree: params
      })
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    onChange(event) {
      console.log(event.detail);
      this.setData({
        activeNames: event.detail,
      });
    },
  }
})

