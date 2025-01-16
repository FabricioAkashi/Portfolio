function downloadPDF() {
    const link = document.createElement('a');
    link.href = 'https://www.fabricioakashi.site/assets/_FabricioSantana-Currículo2 (1).pdf';
    link.download = 'Fabricio-CV.pdf';
    link.click();
}