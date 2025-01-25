/* eslint-disable strict */
'use strict';

export function saveDataJSON(name, data) {
  localStorage.setItem(name, JSON.stringify(data));
}

export function getDataStorage(name) {
  return JSON.parse(localStorage.getItem(name));
}

export function removeDataStorage(name) {
  localStorage.removeItem(name);
}

export function examinationDataStorage() {
  const name = getDataStorage('name');
  const URL = getDataStorage('URL');

  if (!name || !URL) {
    return false;
  }
  return true;
}