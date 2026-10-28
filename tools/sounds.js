/* Ses tasarımı tarifleri — Tone.js ile tarayıcıda offline render edilir.
   Her tarif: { name, dur, render(T, out) } ; out = hedef düğüm (reverb/limiter zinciri) */

export const SOUNDS = {
  // Yumuşak, kısa dokunuş — tahta marimba tık
  tap: {
    dur: 0.35, verb: 0.08,
    render(T, out) {
      const s = new T.FMSynth({
        harmonicity: 3.2, modulationIndex: 6,
        oscillator: { type: 'sine' }, modulation: { type: 'sine' },
        envelope: { attack: 0.002, decay: 0.16, sustain: 0, release: 0.1 },
        modulationEnvelope: { attack: 0.002, decay: 0.06, sustain: 0, release: 0.05 },
      }).connect(out);
      s.volume.value = -9;
      s.triggerAttackRelease('C6', 0.06, 0);
    },
  },

  // Balon patlaması — gövde + hava kaçışı
  pop: {
    dur: 0.5, verb: 0.12,
    render(T, out) {
      const body = new T.MembraneSynth({
        pitchDecay: 0.012, octaves: 6,
        envelope: { attack: 0.001, decay: 0.09, sustain: 0 },
      }).connect(out);
      body.volume.value = -4;
      body.triggerAttackRelease('C4', 0.05, 0);

      const air = new T.NoiseSynth({
        noise: { type: 'white' },
        envelope: { attack: 0.001, decay: 0.07, sustain: 0 },
      });
      const f = new T.Filter({ type: 'bandpass', frequency: 2600, Q: 1.1 }).connect(out);
      air.connect(f);
      air.volume.value = -14;
      air.triggerAttackRelease(0.05, 0.004);
      f.frequency.setValueAtTime(3200, 0.004);
      f.frequency.exponentialRampToValueAtTime(700, 0.12);
    },
  },

  // Doğru cevap — parlak marimba arpeji
  correct: {
    dur: 1.5, verb: 0.3,
    render(T, out) {
      const s = new T.PolySynth(T.FMSynth, {
        harmonicity: 2.02, modulationIndex: 4.5,
        oscillator: { type: 'sine' }, modulation: { type: 'sine' },
        envelope: { attack: 0.004, decay: 0.42, sustain: 0.02, release: 0.5 },
        modulationEnvelope: { attack: 0.004, decay: 0.14, sustain: 0, release: 0.2 },
      }).connect(out);
      s.volume.value = -8;
      ['G5', 'B5', 'D6'].forEach((n, i) => s.triggerAttackRelease(n, 0.5, i * 0.075));
      s.triggerAttackRelease('G6', 0.7, 0.225);
    },
  },

  // Yanlış — nazik, cesaret kırmayan iki nota
  wrong: {
    dur: 0.9, verb: 0.18,
    render(T, out) {
      const s = new T.Synth({
        oscillator: { type: 'triangle' },
        envelope: { attack: 0.01, decay: 0.3, sustain: 0.06, release: 0.3 },
      }).connect(out);
      s.volume.value = -12;
      s.triggerAttackRelease('E4', 0.18, 0);
      s.triggerAttackRelease('C4', 0.35, 0.16);
    },
  },

  // Yıldız — parlak çan + ışıltı
  star: {
    dur: 1.6, verb: 0.45,
    render(T, out) {
      const bell = new T.MetalSynth({
        harmonicity: 8.5, resonance: 3800, modulationIndex: 20, octaves: 1.4,
        envelope: { attack: 0.001, decay: 0.7, release: 0.4 },
      }).connect(out);
      bell.volume.value = -22;
      bell.frequency.value = 1100;
      bell.triggerAttackRelease(0.5, 0);

      const sp = new T.PolySynth(T.Synth, {
        oscillator: { type: 'sine' },
        envelope: { attack: 0.003, decay: 0.3, sustain: 0, release: 0.3 },
      }).connect(out);
      sp.volume.value = -16;
      ['E6', 'A6', 'C7'].forEach((n, i) => sp.triggerAttackRelease(n, 0.25, 0.05 + i * 0.06));
    },
  },

  // Kart çevirme — kâğıt hışırtısı
  flip: {
    dur: 0.4, verb: 0.06,
    render(T, out) {
      const n = new T.NoiseSynth({
        noise: { type: 'pink' },
        envelope: { attack: 0.006, decay: 0.1, sustain: 0 },
      });
      const f = new T.Filter({ type: 'highpass', frequency: 1400, Q: 0.7 }).connect(out);
      n.connect(f);
      n.volume.value = -16;
      n.triggerAttackRelease(0.09, 0);
      f.frequency.setValueAtTime(1200, 0);
      f.frequency.exponentialRampToValueAtTime(4800, 0.14);
    },
  },

  // Geçiş rüzgârı
  whoosh: {
    dur: 1.0, verb: 0.3,
    render(T, out) {
      const n = new T.NoiseSynth({
        noise: { type: 'pink' },
        envelope: { attack: 0.09, decay: 0.42, sustain: 0 },
      });
      const f = new T.Filter({ type: 'bandpass', frequency: 300, Q: 1.3 }).connect(out);
      n.connect(f);
      n.volume.value = -14;
      n.triggerAttackRelease(0.45, 0);
      f.frequency.setValueAtTime(260, 0);
      f.frequency.exponentialRampToValueAtTime(3200, 0.4);
      f.frequency.exponentialRampToValueAtTime(600, 0.75);
    },
  },

  // Yerine oturma — tahta klik + onay notası
  snap: {
    dur: 0.6, verb: 0.14,
    render(T, out) {
      const w = new T.MembraneSynth({
        pitchDecay: 0.006, octaves: 3,
        envelope: { attack: 0.001, decay: 0.05, sustain: 0 },
      }).connect(out);
      w.volume.value = -8;
      w.triggerAttackRelease('A3', 0.03, 0);

      const s = new T.FMSynth({
        harmonicity: 2, modulationIndex: 3,
        envelope: { attack: 0.003, decay: 0.22, sustain: 0, release: 0.2 },
      }).connect(out);
      s.volume.value = -12;
      s.triggerAttackRelease('E6', 0.2, 0.03);
    },
  },

  // Oyun sonu kutlaması — zengin, akorlu
  fanfare: {
    dur: 3.4, verb: 0.55,
    render(T, out) {
      const lead = new T.PolySynth(T.FMSynth, {
        harmonicity: 2.01, modulationIndex: 5,
        oscillator: { type: 'sine' },
        envelope: { attack: 0.005, decay: 0.5, sustain: 0.12, release: 0.9 },
        modulationEnvelope: { attack: 0.004, decay: 0.2, sustain: 0, release: 0.3 },
      }).connect(out);
      lead.volume.value = -9;
      // C - E - G - C yükselişi, sonra geniş akor
      [['C5', 0], ['E5', 0.13], ['G5', 0.26], ['C6', 0.39]].forEach(([n, t]) => lead.triggerAttackRelease(n, 0.3, t));
      ['C5', 'E5', 'G5', 'C6', 'E6'].forEach(n => lead.triggerAttackRelease(n, 1.6, 0.6));

      const bell = new T.MetalSynth({
        harmonicity: 6, resonance: 3000, modulationIndex: 16, octaves: 1.2,
        envelope: { attack: 0.001, decay: 1.2, release: 0.6 },
      }).connect(out);
      bell.volume.value = -26;
      bell.frequency.value = 880;
      bell.triggerAttackRelease(1.0, 0.6);

      const bass = new T.Synth({
        oscillator: { type: 'triangle' },
        envelope: { attack: 0.01, decay: 0.6, sustain: 0.2, release: 0.8 },
      }).connect(out);
      bass.volume.value = -14;
      bass.triggerAttackRelease('C3', 1.8, 0.6);
    },
  },

  // Boya fırçası
  paint: {
    dur: 0.6, verb: 0.1,
    render(T, out) {
      const n = new T.NoiseSynth({
        noise: { type: 'brown' },
        envelope: { attack: 0.02, decay: 0.2, sustain: 0 },
      });
      const f = new T.Filter({ type: 'lowpass', frequency: 900, Q: 2.2 }).connect(out);
      n.connect(f);
      n.volume.value = -11;
      n.triggerAttackRelease(0.2, 0);
      f.frequency.setValueAtTime(1100, 0);
      f.frequency.exponentialRampToValueAtTime(320, 0.24);
    },
  },

  // Yeme sesi
  chomp: {
    dur: 0.8, verb: 0.1,
    render(T, out) {
      const f = new T.Filter({ type: 'bandpass', frequency: 900, Q: 1.6 }).connect(out);
      [0, 0.14, 0.28].forEach((t, i) => {
        const n = new T.NoiseSynth({
          noise: { type: 'brown' },
          envelope: { attack: 0.002, decay: 0.07, sustain: 0 },
        }).connect(f);
        n.volume.value = -9 - i * 2;
        n.triggerAttackRelease(0.06, t);
      });
      f.frequency.setValueAtTime(1100, 0);
      f.frequency.exponentialRampToValueAtTime(420, 0.4);
    },
  },

  // Zıplama
  boing: {
    dur: 0.8, verb: 0.2,
    render(T, out) {
      const s = new T.Synth({
        oscillator: { type: 'triangle' },
        envelope: { attack: 0.004, decay: 0.3, sustain: 0, release: 0.2 },
      }).connect(out);
      s.volume.value = -10;
      s.triggerAttackRelease('C4', 0.3, 0);
      s.frequency.setValueAtTime(180, 0);
      s.frequency.exponentialRampToValueAtTime(760, 0.1);
      s.frequency.exponentialRampToValueAtTime(420, 0.26);
    },
  },

  // Köstebek çıkışı
  rise: {
    dur: 0.5, verb: 0.1,
    render(T, out) {
      const s = new T.Synth({
        oscillator: { type: 'sine' },
        envelope: { attack: 0.01, decay: 0.16, sustain: 0, release: 0.1 },
      }).connect(out);
      s.volume.value = -16;
      s.triggerAttackRelease('E4', 0.14, 0);
      s.frequency.setValueAtTime(300, 0);
      s.frequency.exponentialRampToValueAtTime(620, 0.15);
    },
  },

  // Kuş cıvıltısı (ambiyans)
  chirp: {
    dur: 1.0, verb: 0.35,
    render(T, out) {
      const s = new T.Synth({
        oscillator: { type: 'sine' },
        envelope: { attack: 0.006, decay: 0.05, sustain: 0, release: 0.04 },
      }).connect(out);
      s.volume.value = -22;
      const notes = [[0, 2400, 3300], [0.1, 2900, 3800], [0.21, 2600, 3200], [0.33, 3100, 4000]];
      notes.forEach(([t, f0, f1]) => {
        s.triggerAttackRelease('C7', 0.05, t);
        s.frequency.setValueAtTime(f0, t);
        s.frequency.exponentialRampToValueAtTime(f1, t + 0.05);
      });
    },
  },
};

// Ksilofon notaları: C5'ten C6'ya — gerçek marimba tınısı
export const SCALE_NOTES = ['C5', 'D5', 'E5', 'F5', 'G5', 'A5', 'B5', 'C6'];
export const noteRecipe = note => ({
  dur: 2.0, verb: 0.4, arg: note,
  render(T, out, note) {
    const s = new T.FMSynth({
      harmonicity: 3.01, modulationIndex: 7,
      oscillator: { type: 'sine' }, modulation: { type: 'sine' },
      envelope: { attack: 0.003, decay: 1.1, sustain: 0, release: 0.6 },
      modulationEnvelope: { attack: 0.003, decay: 0.22, sustain: 0, release: 0.2 },
    }).connect(out);
    s.volume.value = -6;
    s.triggerAttackRelease(note, 1.1, 0);
    // tahta tık
    const click = new T.MembraneSynth({
      pitchDecay: 0.004, octaves: 2,
      envelope: { attack: 0.001, decay: 0.03, sustain: 0 },
    }).connect(out);
    click.volume.value = -20;
    click.triggerAttackRelease('C5', 0.02, 0);
  },
});

// ---------- MÜZİK DÖNGÜLERİ ----------
const BPM = 104;
const B = 60 / BPM;        // vuruş
const BAR = B * 4;

/** Ada teması: ferah ukulele + marimba, 4 ölçü döngü */
export const MUSIC_ISLAND = {
  dur: BAR * 4 + 1.6, loopEnd: BAR * 4, verb: 0.38,
  render(T, out) {
    const B = 60 / 104, BAR = B * 4;
    const chords = [['C3', 'E4', 'G4', 'C5'], ['A2', 'C4', 'E4', 'A4'], ['F2', 'A3', 'C4', 'F4'], ['G2', 'B3', 'D4', 'G4']];
    // PluckSynth monofoniktir: akor için üç ayrı tel
    const ukuMix = new T.Gain(1).connect(out);
    const uku = [0, 1, 2].map(() => {
      const p = new T.PluckSynth({ attackNoise: 0.9, dampening: 4200, resonance: 0.88 }).connect(ukuMix);
      p.volume.value = -13;
      return p;
    });
    const bass = new T.Synth({ oscillator: { type: 'sine' }, envelope: { attack: 0.01, decay: 0.42, sustain: 0.1, release: 0.3 } }).connect(out);
    bass.volume.value = -11;
    const mar = new T.FMSynth({
      harmonicity: 3.01, modulationIndex: 6, oscillator: { type: 'sine' },
      envelope: { attack: 0.003, decay: 0.5, sustain: 0, release: 0.3 },
      modulationEnvelope: { attack: 0.003, decay: 0.15, sustain: 0, release: 0.1 },
    }).connect(out);
    mar.volume.value = -14;
    const shk = new T.NoiseSynth({ noise: { type: 'pink' }, envelope: { attack: 0.004, decay: 0.05, sustain: 0 } });
    const sf = new T.Filter({ type: 'highpass', frequency: 5200 }).connect(out);
    shk.connect(sf);
    shk.volume.value = -30;

    const mel = [
      ['E5', 0], ['G5', 1], ['A5', 2], ['G5', 3],
      ['E5', 4], ['D5', 5], ['C5', 6], [null, 7],
      ['D5', 8], ['E5', 9], ['G5', 10], ['E5', 11],
      ['D5', 12], ['C5', 13], ['A4', 14], [null, 15],
    ];
    for (let bar = 0; bar < 4; bar++) {
      const t0 = bar * BAR;
      const ch = chords[bar];
      bass.triggerAttackRelease(ch[0], B * 1.6, t0);
      bass.triggerAttackRelease(ch[0], B * 1.2, t0 + B * 2);
      // ukulele tıngırtısı: 8'likler
      for (let e = 0; e < 8; e++) {
        if (e % 2 === 1 || e === 2 || e === 6) {
          ch.slice(1).forEach((n, i) => uku[i].triggerAttackRelease(n, B * 0.4, t0 + e * B * 0.5 + i * 0.006));
        }
        if (e % 2 === 1) shk.triggerAttackRelease(0.04, t0 + e * B * 0.5);
      }
    }
    mel.forEach(([n, i]) => { if (n) mar.triggerAttackRelease(n, B * 0.45, i * B * (4 / 4) * 1); });
  },
};

/** Oyun içi tema: sakin, arka planda kalan */
export const MUSIC_PLAY = {
  dur: BAR * 4 + 2.0, loopEnd: BAR * 4, verb: 0.5,
  render(T, out) {
    const B = 60 / 104, BAR = B * 4;
    const chords = [['C3', 'G3', 'E4'], ['F2', 'C4', 'A3'], ['A2', 'E4', 'C4'], ['G2', 'D4', 'B3']];
    const pad = new T.PolySynth(T.Synth, {
      oscillator: { type: 'triangle' },
      envelope: { attack: 0.35, decay: 0.6, sustain: 0.35, release: 1.2 },
    }).connect(out);
    pad.volume.value = -22;
    const bell = new T.FMSynth({
      harmonicity: 2.5, modulationIndex: 3.5, oscillator: { type: 'sine' },
      envelope: { attack: 0.004, decay: 0.8, sustain: 0, release: 0.5 },
      modulationEnvelope: { attack: 0.004, decay: 0.2, sustain: 0, release: 0.2 },
    }).connect(out);
    bell.volume.value = -18;
    const bass = new T.Synth({ oscillator: { type: 'sine' }, envelope: { attack: 0.02, decay: 0.5, sustain: 0.15, release: 0.4 } }).connect(out);
    bass.volume.value = -16;

    for (let bar = 0; bar < 4; bar++) {
      const t0 = bar * BAR;
      const ch = chords[bar];
      pad.triggerAttackRelease(ch.slice(1), BAR * 0.92, t0);
      bass.triggerAttackRelease(ch[0], B * 1.8, t0);
    }
    [['C5', 0], ['E5', 1.5], ['G5', 3], ['E5', 5], ['A4', 8], ['C5', 9.5], ['E5', 11], ['D5', 13]]
      .forEach(([n, b]) => bell.triggerAttackRelease(n, B * 0.8, b * B));
  },
};
