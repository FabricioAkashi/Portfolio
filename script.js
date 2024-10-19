function downloadPDF() {
    const link = document.createElement('a');
    link.href = './assets/fabricioAkashiCV.pdf';
    link.download = 'Fabricio-CV.pdf';
    link.click();
}