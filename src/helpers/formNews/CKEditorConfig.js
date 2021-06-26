const CKEditorConfig = {
  language: 'es',
  height: 350,
  toolbar: [{ name: 'clipboard', items: [ 'Undo', 'Redo' ] },
            { name: 'basicstyles', items: [ 'Bold', 'Italic', 'Underline', 'Strike'] },
            { name: 'paragraph', items: [ 'NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote'] },
            { name: 'links', items: [ 'Link', 'Unlink', 'Anchor' ] },
            { name: 'about', items: [ 'About' ] },
            '/',
            { name: 'styles', items: [ 'Styles', 'Format' ] },
            { name: 'insert', items: [ 'Image', 'Table', 'HorizontalRule', 'Smiley', 'SpecialChar', 'PageBreak', 'Iframe' ] },
            { name: 'editing', items: [ 'Find', 'Replace', '-', 'SelectAll', '-', 'Scayt' ] },
            { name: 'colors', items: [ 'TextColor', 'BGColor' ] }
           ],
                     
  // Remove some buttons provided by the standard plugins, which are
  // not needed in the Standard(s) toolbar.
  removeButtons: 'Subscript,Superscript',

  // Set the most common block elements.
  format_tags: 'p;h1;h2;h3;pre',

  // Simplify the dialog windows.
  removeDialogTabs: 'image:advanced;link:advanced',
}

export default CKEditorConfig;