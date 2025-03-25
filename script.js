function downloadPDF() {
    const link = document.createElement('a');
    link.href = 'https://www.fabricioakashi.site/assets/CV - Fabricio Santana (English).pdf';
    link.download = 'Fabricio-CV.pdf';
    link.click();
}