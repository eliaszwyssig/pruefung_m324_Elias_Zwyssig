export default [
  {
    files:
      [
        '**/*.js',
      ], // Wendet die Regeln auf alle .js-Dateien an
    languageOptions:
      {
        ecmaVersion:
          'latest',
        sourceType:
          'module',
      },
    rules:
      {
        'no-unused-vars':
          'error', // Fehler bei ungenutzten Variablen
        'prefer-const':
          'error', // Fehler, wenn let statt const genutzt wird
        eqeqeq:
          'error', // Fehler bei nicht-strikter Gleichheit
      },
  },
];
