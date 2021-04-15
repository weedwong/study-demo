function createElement(tag, attrs, ...children) {
  if (arguments.length === 0) return null;
  if (typeof tag === 'string' && arguments.length === 1) return tag;
  return {
    tag,
    attrs,
    children
  }
}

export default createElement;