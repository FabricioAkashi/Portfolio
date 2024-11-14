function downloadPDF() {
    const link = document.createElement('a');
    link.href = 'https://www.fabricioakashi.site/assets/Curriculo.pdf';
    link.download = 'Fabricio-CV.pdf';
    link.click();
}