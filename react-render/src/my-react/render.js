function render(vnode, container) {
  // 当vnode为字符串时，渲染结果为文本节点
  if (typeof vnode === 'string') {
    const textNode = document.createTextNode(vnode);
    return container.appendChild(textNode);
  }
  // vnode非字符串时，渲染为dom节点
  const dom = document.createElement(vnode.tag);

  // 设置节点的属性
  if (vnode.attrs) {
    Object.keys(vnode.attrs).forEach(key => {
      const value = vnode.attrs[key];
      setAttribute(dom, key, value);
    })
  }

  // 递归渲染子节点
  vnode.children.forEach(child => render(child, dom));

  // 将渲染结果挂载到容器节点上
  return container.appendChild(dom);
}

function setAttribute(dom, name, value) {
  // 将className改回class
  if (name === 'className') name = 'class';

  // 判断是否是一个监听方法

  if (/on\w+/.test(name)) {
    name = name.toLowerCase();
    dom[name] = value || '';
    // 如果属性名是style，则更新style对象
  } else if (name === 'style') {
    if (!value || typeof value === 'string') {
      dom.style.cssText = value || '';
    } else if (value && typeof value === 'object') {
      for ( let key in value ) {
        // 可以通过style={ width: 20 }这种形式来设置样式，可以省略掉单位px
        dom.style[key] = typeof value[key] === 'number' ? value[key] + 'px' : value[key];
      }
    }
  } else {
    if (name in dom) {
      dom[name] = value || '';
    }
    if (value) {
      dom.setAttribute(name, value)
    } else {
      dom.removeAttribute(name);
    }
  }
}

export default render;