import { ElectronAPI } from '@electron-toolkit/preload';

declare global {
  interface Window {
    electron: ElectronAPI;
    api: {
      setKey: (key: string) => void;
      selectFolder: () => void;
      setRootResourcePath: (path: string) => void;
      clearSettings: () => void;
      cancelDownload: (id: string) => void;
      closeApp: () => void;
      resourceRemove: (resource: Resource) => void;
      setResourcePath: (type: ResourceType, path: string) => void;
      getResourcePath: (type: ResourceType) => string;
      openRootModelFolder: () => void;
      init: () => void;
      setNSFW: (nsfw: boolean) => void;
      openModelFileFolder: (filePath: string) => void;
      setApiKey(key: string): void;
    };
  }

  type Resource = {
    hash: string;
    name: string; // filename
    modelName: string;
    modelVersionName: string;
    type: string;
    url: string; // download url
    id?: string;
    downloadDate?: string;
    previewImageUrl?: string;
    civitaiUrl?: string;
    downloading?: boolean;
    localPath?: string;
  };

  enum ActivityType {
    Downloaded = 'downloaded',
    Deleted = 'deleted',
    Cancelled = 'cancelled',
    Downloading = 'downloading',
  }

  type ActivityItem = {
    name: string;
    date: string;
    type: ActivityType;
    civitaiUrl?: string;
  };

  type ResourcesMap = {
    [k: string]: Resource;
  };

  type Activity = {
    [k: string]: {
      totalLength: number;
    } & Resource;
  };

  enum ResourceType {
    DEFAULT = 'default',
    CHECKPOINT = 'Checkpoint',
    CONTROLNET = 'ControlNet',
    UPSCALER = 'Upscaler',
    HYPERNETWORK = 'Hypernetwork',
    TEXTUAL_INVERSION = 'TextualInversion',
    LORA = 'Lora',
    LO_CON = 'LoCon',
    VAE = 'VAE',
  }

  type Payload = {
    types: ResourceType;
    resources?: Resource[];
    status: Status;
    progress?: number;
    remainingTime?: number;
    speed?: number;
    error?: string;
  };

  enum Status {
    SUCCESS = 'success',
    PROCESSING = 'processing',
    ERROR = 'error',
    CANCELLED = 'cancelled',
  }

  enum CommandTypes {
    ActivitiesList = 'activities:list',
    ActivitiesCancel = 'activities:cancel',
    ResourcesList = 'resources:list',
    ResourcesAdd = 'resources:add',
    ResourcesRemove = 'resources:remove',
  }
}
