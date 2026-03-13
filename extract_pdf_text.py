import pdfplumber

pdf_path = "pdf.pdf"

with pdfplumber.open(pdf_path) as pdf:
    for i, page in enumerate(pdf.pages):
        text = page.extract_text()
        print(f"\n--- Página {i+1} ---\n")
        print(text)
