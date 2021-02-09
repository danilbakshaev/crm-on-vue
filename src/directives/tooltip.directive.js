export default {
  bind(el, {value}) {
    M.Tooltip.init(el, {html: value})
  },
  unbind(el) {
    const tooltip = M.Tooltip.init(el, {html: value})

    if (tooltip && tooltop.destroy) {
      tooltip.destroy()      
    }
  }
}