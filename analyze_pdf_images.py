from PIL import Image
import os

def analyze_image(path):
    img = Image.open(path)
    width, height = img.size
    colors = img.getcolors(maxcolors=1000000)
    dominant = sorted(colors, key=lambda x: x[0], reverse=True)[0][1] if colors else None
    return {
        'file': path,
        'size': (width, height),
        'dominant_color': dominant,
        'mode': img.mode
    }

def main():
    results = []
    for i in range(1, 11):
        fname = f'pdf_page_{i}.png'
        if os.path.exists(fname):
            res = analyze_image(fname)
            results.append(res)
    for r in results:
        print(f"{r['file']}: size={r['size']}, mode={r['mode']}, dominant_color={r['dominant_color']}")

if __name__ == '__main__':
    main()
