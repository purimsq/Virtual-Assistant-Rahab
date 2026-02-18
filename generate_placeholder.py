
# Python script to generate a placeholder image
import struct
import zlib

def make_png(width, height, variant="default"):
    # 1. Signature
    png = b'\x89PNG\r\n\x1a\n'
    
    # 2. IHDR
    ihdr_data = struct.pack('>IIBBBBB', width, height, 8, 2, 0, 0, 0)
    crc = zlib.crc32(b'IHDR' + ihdr_data)
    png += struct.pack('>I', len(ihdr_data)) + b'IHDR' + ihdr_data + struct.pack('>I', crc)
    
    # 3. IDAT
    raw_data = b''
    for y in range(height):
        row_filter = b'\x00'
        row_data = b''
        for x in range(width):
            if variant == "calendar":
                # Calendar variant: White background with grid
                r, g, b = 248, 250, 252 # Slate 50 background
                
                # Grid lines (approx 7 columns, 5 rows)
                # Col width ~85, Row height ~80
                if x % 85 < 2 or y % 80 < 2:
                    r, g, b = 203, 213, 225 # Slate 300 line
                
                # Header row
                if y < 40:
                    r, g, b = 226, 232, 240 # Slate 200
                
                # Representative Events
                # Event 1 (Blue)
                if 100 < x < 160 and 100 < y < 130:
                     r, g, b = 59, 130, 246
                # Event 2 (Green)
                if 200 < x < 280 and 190 < y < 220:
                     r, g, b = 34, 197, 94
                # Event 3 (Red)
                if 300 < x < 350 and 280 < y < 310:
                     r, g, b = 239, 68, 68
                # Event 4 (Orange)
                if 400 < x < 480 and 130 < y < 160:
                     r, g, b = 249, 115, 22

            else:
                # Executive variant: Blueish Gradient
                # Gradient from slate-100 (241, 245, 249) to slate-300 (203, 213, 225)
                r = int(241 - (y / height) * (241 - 203))
                g = int(245 - (y / height) * (245 - 213))
                b = int(249 - (y / height) * (249 - 225))
                
                # Draw a simple "E" shape / Document shape
                if 250 <= x <= 350 and 150 <= y <= 250:
                    if x <= 270 or y <= 170 or y >= 230 or (190 <= y <= 210 and x <= 330):
                         r, g, b = 59, 130, 246 # Blue color
            
            row_data += struct.pack('BBB', r, g, b)
        raw_data += row_filter + row_data
        
    compressed_data = zlib.compress(raw_data)
    crc = zlib.crc32(b'IDAT' + compressed_data)
    png += struct.pack('>I', len(compressed_data)) + b'IDAT' + compressed_data + struct.pack('>I', crc)
    
    # 4. IEND
    crc = zlib.crc32(b'IEND')
    png += struct.pack('>I', 0) + b'IEND' + struct.pack('>I', crc)
    
    return png

if __name__ == '__main__':
    with open('public/samples/executive_sample.png', 'wb') as f:
        f.write(make_png(600, 400, "executive"))
    with open('public/samples/calendar_sample.png', 'wb') as f:
        f.write(make_png(600, 400, "calendar"))
