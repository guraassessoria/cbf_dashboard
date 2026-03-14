// Adiciona html2canvas e jsPDF via CDN
// Função para exportar dashboard como PDF fiel
function exportDashboardPDF() {
  const pages = document.querySelectorAll('.page');
  let pdf;
  let promises = [];
  pages.forEach((page, idx) => {
    // Define orientação
    const isLandscape = page.offsetWidth > page.offsetHeight;
    const orientation = isLandscape ? 'landscape' : 'portrait';
    promises.push(html2canvas(page, {backgroundColor: '#fff'}).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pageWidth = orientation === 'landscape' ? 297 : 210;
      const pageHeight = orientation === 'landscape' ? 210 : 297;
      if (!pdf) pdf = new jsPDF({orientation, unit: 'mm', format: 'a4'});
      else pdf.addPage([pageWidth, pageHeight], orientation);
      pdf.addImage(imgData, 'PNG', 0, 0, pageWidth, pageHeight);
    }));
  });
  Promise.all(promises).then(() => {
    pdf.save('dashboard.pdf');
  });
}
