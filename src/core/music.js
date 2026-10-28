// Müzik ve ambiyans: audio.js'teki örnek tabanlı motoru kullanır
import { playMusic as play, refreshMusic as refresh, duck as duckBus, startAmbience as ambOn, stopAmbience as ambOff, buzz as vib, HAPTIC as H } from './audio.js';

const TRACK = { island: 'music-island', play: 'music-play' };

export function playMusic(name) { play(name ? TRACK[name] || name : null); }
export const refreshMusic = refresh;
export const duck = duckBus;
export const startAmbience = ambOn;
export const stopAmbience = ambOff;
export const buzz = vib;
export const HAPTIC = H;
