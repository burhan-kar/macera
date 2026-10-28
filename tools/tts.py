#!/usr/bin/env python3
"""Türkçe/İngilizce seslendirme: espeak-ng fonem çıktısı + MBROLA diphone sentezi.

espeak-ng metni fonem, süre ve perde eğrisine çevirir; burada fonemler MBROLA
veritabanının setine eşlenir, perde çocuk oyununa uygun şekilde yükseltilir ve
canlandırılır, sonra mbrola sesi üretir.
"""
import re
import subprocess
import sys

# MBROLA tr1/tr2 fonem seti (veritabanından)
TR_SET = {
    'a', 'b', 'dZ', 'tS', 'd', 'e', 'f', 'g', 'G', 'h', '@', 'I', 'Z', 'k',
    'l', 'L', 'm', 'n', 'o', "@'", 'p', 'r', 's', 'S', 't', 'u', 'y', 'v', 'j', 'z', '_',
}
# espeak çıktısında görülen ama veritabanında olmayan fonemler için karşılıklar
TR_FIX = {
    '&': 'e', 'E': 'e', 'A': 'a', 'i': 'I', 'N': 'n', 'J': 'j', 'c': 'k',
    'Q': 'k', 'R': 'r', 'x': 'h', 'w': 'v', 'q': 'k', 'O': 'o', 'U': 'u',
    'V': 'a', 'Y': 'y', '3': 'e', '0': 'o', ':': '', 'r-': 'r', 'o:': 'o',
    'l/': 'L', 'k_h': 'k', 'p_h': 'p', 't_h': 't', '{': 'a', 'AI': 'aI',
}
# MBROLA us1/us2 (İngilizce) seti
EN_SET = {
    'a', 'aa', 'i', 'ii', 'u', 'uu', 'A', 'E', 'EE', 'I', 'O', 'OO', 'U', 'V',
    '@', '@@', 'aI', 'aU', 'eI', 'oU', 'OI', '@U', 'b', 'd', 'dZ', 'D', 'f',
    'g', 'h', 'j', 'k', 'l', 'm', 'n', 'N', 'p', 'r', 's', 'S', 't', 'tS',
    'T', 'v', 'w', 'z', 'Z', '_',
}
EN_FIX = {
    'e': 'E', 'o': 'OU', 'E:': 'EE', 'A:': 'aa', 'i:': 'ii', 'u:': 'uu', '3:': '@@',
    '{': 'A', 'AI': 'aI', 'AU': 'aU', 'EI': 'eI', 'OI': 'OI', 'oU': 'oU', '@U': '@U',
    'k_h': 'k', 'p_h': 'p', 't_h': 't', 'l/': 'l', 'r=': 'r', 'I2': 'I', 'a': 'A', 'Q': 'O',
}

VOICES = {
    # ad: (espeak sesi, mbrola veritabanı, perde çarpanı, hız)
    'tr-kadin': ('mb-tr2', '/usr/share/mbrola/tr2/tr2', 1.22, 150),
    'tr-erkek': ('mb-tr1', '/usr/share/mbrola/tr1/tr1', 1.30, 150),
    'en-kadin': ('mb-us2', '/usr/share/mbrola/us2/us2', 1.20, 148),
    'en-erkek': ('mb-us1', '/usr/share/mbrola/us1/us1', 1.28, 148),
}


def phonemes(text, espeak_voice, speed):
    """espeak-ng'den fonem + süre + perde satırlarını alır."""
    out = subprocess.run(
        ['espeak-ng', '-v', espeak_voice, '--pho', '-q', '-s', str(speed), text],
        capture_output=True, text=True, timeout=60,
    )
    return out.stdout.splitlines()


def fix_pho(lines, lang, pitch_mul, lively=0.16):
    """Fonemleri veritabanı setine eşler, perdeyi yükseltir ve canlandırır."""
    known = TR_SET if lang == 'tr' else EN_SET
    fixes = TR_FIX if lang == 'tr' else EN_FIX
    out, missing = [], set()
    for ln in lines:
        ln = ln.rstrip()
        if not ln.strip():
            continue
        parts = ln.split('\t')
        ph = parts[0].strip()
        if ph not in known:
            alt = fixes.get(ph)
            if alt is None:
                base = re.sub(r"[:';]", '', ph)
                alt = fixes.get(base, base if base in known else '_')
                missing.add(ph)
            ph = alt or '_'
        rest = parts[1:] if len(parts) > 1 else []
        if not rest:
            out.append(ph)
            continue
        dur = rest[0].strip()
        nums = ' '.join(rest[1:]).split()
        pts = []
        for i in range(0, len(nums) - 1, 2):
            pos = float(nums[i])
            hz = float(nums[i + 1]) * pitch_mul
            # Vurgu noktalarını hafifçe yukarı çek: daha neşeli tonlama
            hz *= 1 + lively * (0.5 - abs(pos / 100 - 0.5)) * 2 * 0.5
            pts.append(f'{int(pos)} {int(round(hz))}')
        out.append(f'{ph} {dur} ' + ' '.join(pts) if pts else f'{ph} {dur}')
    return out, missing


def say(text, out_wav, voice='tr-kadin', lively=0.16):
    espeak_voice, db, mul, speed = VOICES[voice]
    lang = 'tr' if voice.startswith('tr') else 'en'
    lines, missing = fix_pho(phonemes(text, espeak_voice, speed), lang, mul, lively)
    pho = '\n'.join(lines) + '\n'
    p = subprocess.run(['mbrola', '-e', db, '-', out_wav],
                       input=pho, capture_output=True, text=True, timeout=120)
    if p.returncode != 0:
        raise RuntimeError(p.stderr[:400])
    return missing


if __name__ == '__main__':
    text, out = sys.argv[1], sys.argv[2]
    voice = sys.argv[3] if len(sys.argv) > 3 else 'tr-kadin'
    miss = say(text, out, voice)
    print('eşleşmeyen:', sorted(miss) if miss else 'yok')
