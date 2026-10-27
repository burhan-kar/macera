import cairosvg
for size, name, src in [(512,'icon-512.png','icon.svg'),(192,'icon-192.png','icon.svg'),(180,'apple-touch-icon.png','icon.svg'),(512,'icon-maskable-512.png','icon-maskable.svg')]:
    cairosvg.svg2png(url='tools/'+src, write_to='icons/'+name, output_width=size, output_height=size)
print('ok')
