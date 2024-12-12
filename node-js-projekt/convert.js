import fs from 'fs';
import { marked } from 'marked';

// Lese die Markdown-Datei
fs.readFile('task-3.md', 'utf8', (err, data) => {
  if (err) {
    console.error('Fehler beim Lesen der Markdown-Datei:', err);
    return;
  }

  // Konvertiere den Markdown-Inhalt in HTML
  const htmlContent = marked(data);

  // Erstelle das HTML-Dokument
  const htmlOutput = `
  <!DOCTYPE html>
  <html lang="de">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Markdown to HTML</title>
  </head>
  <body>
    ${htmlContent}
  </body>
  </html>
  `;

  // Schreibe den HTML-Inhalt in eine Datei
  fs.writeFile('task-3.html', htmlOutput, (err) => {
    if (err) {
      console.error('Fehler beim Schreiben der HTML-Datei:', err);
      return;
    }
    console.log('HTML-Datei erfolgreich erstellt: task-3.html');
  });
});
