import { BrowserWindow, ipcMain } from 'electron';
import { eventSetKey } from './set-key';
import { eventOpenRootModelFolder } from './open-root-model-folder';
import { eventCloseApp } from './close-app';
import { eventClearSettings } from './clear-settings';
import { eventSetRootPath } from './set-root-path';
import { eventSetPath } from './set-path';
import { eventResourceRemove } from './resource-remove';
import { eventInit } from './init';
import { eventSetNSFW } from './set-nsfw';
import { eventOpenModelFileFolder } from './open-model-file-folder';
import { eventSetApiKey } from './set-api-key';

type eventsListenersParams = {
  mainWindow: BrowserWindow;
};

export function eventsListeners({ mainWindow }: eventsListenersParams) {
  ipcMain.on('set-key', eventSetKey);
  ipcMain.on('resource-remove', (_, resource) =>
    eventResourceRemove(resource, mainWindow),
  );
  ipcMain.on('set-root-path', eventSetRootPath);
  ipcMain.on('set-path', eventSetPath);
  ipcMain.on('clear-settings', eventClearSettings);
  ipcMain.on('close-app', eventCloseApp);
  ipcMain.on('open-root-model-folder', eventOpenRootModelFolder);
  ipcMain.on('init', eventInit);
  ipcMain.on('set-nsfw', eventSetNSFW);
  ipcMain.on('open-model-file-folder', (_, filePath) =>
    eventOpenModelFileFolder(filePath),
  );
  ipcMain.on('set-api-key', eventSetApiKey);
}
