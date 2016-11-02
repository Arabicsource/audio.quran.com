export const AUDIO_URL = 'http://download.quranicaudio.com/quran';
export const LOAD = '@@quran/audioplayer/LOAD';
export const UPDATE = '@@quran/audioplayer/UPDATE';
export const SET_USER_AGENT = '@@quran/audioplayer/SET_USER_AGENT';
export const SET_CURRENT_FILE = '@@quran/audioplayer/SET_CURRENT_FILE';
export const PLAY = '@@quran/audioplayer/PLAY';
export const PAUSE = '@@quran/audioplayer/PAUSE';
export const PLAY_PAUSE = '@@quran/audioplayer/PLAY_PAUSE';
export const REPEAT = '@@quran/audioplayer/REPEAT';
export const CONTINUOUS = '@@quran/audioplayer/CONTINUOUS';
export const RANDOM = '@@quran/audioplayer/RANDOM';
export const NEXT = '@@quran/audioplayer/NEXT';
export const PREVIOUS = '@@quran/audioplayer/PREVIOUS';

export function setUserAgent(userAgent) {
  return {
    type: SET_USER_AGENT,
    userAgent
  };
}

export function setCurrentFile(file) {
  return {
    type: SET_CURRENT_FILE,
    file
  };
}

export function play() {
  return {
    type: PLAY
  };
}

export function pause() {
  return {
    type: PAUSE
  };
}

export function playPause() {
  return {
    type: PLAY_PAUSE
  };
}

export function repeat() {
  return {
    type: REPEAT
  };
}

export function continuous() {
  return {
    type: CONTINUOUS
  };
}

export function random() {
  return {
    type: RANDOM
  };
}

export function load({ surah, qari }) {
  return {
    type: LOAD,
    surah,
    qari
  };
}

export function update(payload) {
  return {
    type: UPDATE,
    payload
  };
}

export function next() {
  return {
    type: NEXT
  };
}

export function previous() {
  return {
    type: PREVIOUS
  };
}
