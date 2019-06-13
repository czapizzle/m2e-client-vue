import iamNotify from './src/notify'

const Plugin = {
  install: function (Vue) {
    let notifies = []

    function showNotify (obj) {
      const PluginComponent = Vue.extend(iamNotify)
      var propsData = Object.assign({}, obj)
      let component = new PluginComponent({
        el: document.createElement('div'),
        propsData
      })
      notifies.push(component)
      return component
    }

    Vue.prototype.$notify = function (obj) {
      return showNotify(obj)
    }
  }
}

export default Plugin
