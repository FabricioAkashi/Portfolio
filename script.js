function downloadPDF() {
    const link = document.createElement('a');
    link.href = 'https://www.fabricioakashi.site/assets/FabricioAkashiCV.pdf';
    link.download = 'Fabricio-CV.pdf';
    link.click();
}