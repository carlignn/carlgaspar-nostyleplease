// Used in My Voice Warm-Up - enables the markdown task-list checkboxes.
// Hugo renders "- [ ] item" as a disabled checkbox, so they have to be turned
// on here. State lives in the DOM only: a refresh clears everything.
(function () {
  function build() {
    var article = document.querySelector('article');
    if (!article) return;

    var boxes = article.querySelectorAll('li > input[type="checkbox"]');
    if (!boxes.length) return;
    article.classList.add('checklist');

    for (var i = 0; i < boxes.length; i++) {
      var box = boxes[i];
      box.disabled = false;
      box.checked = false; // ignore any state the browser tries to restore
      box.setAttribute('autocomplete', 'off');

      // Wrap the item in a label so the text is a tap target too. Everything
      // after the checkbox goes in one span, otherwise inline markup like
      // **bold** would become a separate flex item and break the line.
      var li = box.parentNode;
      var label = document.createElement('label');
      var text = document.createElement('span');

      li.removeChild(box);
      while (li.firstChild) text.appendChild(li.firstChild);
      if (text.firstChild && text.firstChild.nodeType === 3) {
        text.firstChild.nodeValue = text.firstChild.nodeValue.replace(/^\s+/, '');
      }

      label.appendChild(box);
      label.appendChild(text);
      li.appendChild(label);
    }

    article.addEventListener('change', function (e) {
      var box = e.target;
      if (!box || box.type !== 'checkbox') return;
      var li = box.closest('li');
      if (li) li.classList.toggle('done', box.checked);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', build);
  } else {
    build();
  }
})();
