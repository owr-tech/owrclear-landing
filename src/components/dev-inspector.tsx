const DEV_INSPECTOR_SCRIPT = `
(function () {
  var outlined = null;
  var badge = null;

  function clear() {
    if (outlined) {
      outlined.style.outline = '';
      outlined.style.outlineOffset = '';
      outlined = null;
    }
    if (badge) {
      badge.remove();
      badge = null;
    }
  }

  function pathOf(el) {
    var parts = [];
    var node = el;
    var depth = 0;
    while (node && depth < 9) {
      var part = node.tagName.toLowerCase();
      if (node.id) {
        part = part + '#' + node.id;
      } else if (typeof node.className === 'string' && node.className.trim()) {
        part = part + '.' + node.className.trim().split(/\\s+/).slice(0, 2).join('.');
      }
      var parent = node.parentElement;
      if (parent) {
        var same = Array.prototype.filter.call(parent.children, function (c) {
          return c.tagName === node.tagName;
        });
        if (same.length > 1) part = part + ':nth-of-type(' + (same.indexOf(node) + 1) + ')';
      }
      parts.unshift(part);
      node = parent;
      depth++;
    }
    return parts.join(' > ');
  }

  document.addEventListener('click', function (event) {
    if (!event.altKey) return;
    var target = event.target;
    if (!target || !target.closest || target.closest('[data-dev-inspector]')) return;
    event.preventDefault();
    event.stopPropagation();
    clear();

    var el = target;
    var section = el.closest('section[id]') || el.closest('header, footer, nav');
    var rect = el.getBoundingClientRect();
    var payload = {
      tag: el.tagName.toLowerCase(),
      id: el.id || '',
      className: typeof el.className === 'string' ? el.className : '',
      sectionId: section ? (section.id || section.tagName.toLowerCase()) : '',
      path: pathOf(el),
      text: (el.innerText || el.textContent || '').trim().replace(/\\s+/g, ' ').slice(0, 400),
      html: el.outerHTML.slice(0, 2000),
      rect: {
        x: Math.round(rect.left + window.scrollX),
        y: Math.round(rect.top + window.scrollY),
        w: Math.round(rect.width),
        h: Math.round(rect.height)
      },
      href: el.tagName === 'A' ? el.href : ''
    };

    el.style.outline = '3px solid #ff3d6e';
    el.style.outlineOffset = '2px';
    outlined = el;

    badge = document.createElement('div');
    badge.setAttribute('data-dev-inspector', '1');
    badge.textContent = 'SCOPED  ' + payload.tag + (payload.id ? '#' + payload.id : '') +
      (payload.sectionId ? '  .  ' + payload.sectionId : '');
    badge.style.cssText = 'position:fixed;z-index:2147483647;top:' +
      Math.max(8, rect.top - 34) + 'px;left:' +
      Math.max(8, Math.min(window.innerWidth - 320, rect.left)) +
      'px;padding:6px 10px;border-radius:6px;background:#ff3d6e;color:#fff;' +
      'font:600 12px/1.2 ui-monospace,monospace;box-shadow:0 3px 12px rgba(0,0,0,.25);' +
      'pointer-events:none;max-width:310px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis';
    document.body.appendChild(badge);

    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/api/inspect', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(payload));
  }, true);

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') clear();
  });
})();
`.trim()

export function DevInspector() {
  if (process.env.NODE_ENV === 'production') return null

  return (
    <>
      <div
        data-dev-inspector="1"
        style={{
          position: 'fixed',
          bottom: 12,
          left: 12,
          zIndex: 2147483647,
          padding: '7px 11px',
          borderRadius: 8,
          background: 'rgba(17,17,17,.86)',
          color: '#fff',
          font: '500 11px/1.3 ui-monospace, monospace',
          pointerEvents: 'none',
          maxWidth: 'min(360px, 80vw)',
        }}
      >
        Alt + Click an element to scope it for Hermes · Esc clears
      </div>
      <script dangerouslySetInnerHTML={{ __html: DEV_INSPECTOR_SCRIPT }} />
    </>
  )
}
