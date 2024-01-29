import { useState } from 'react';
import { Button } from './ui/button';
import { GoFileDirectory } from 'react-icons/go';
import { useApi } from '@/hooks/use-api';
import { useElectron } from '@/providers/electron';

type PathInputProps = {
  defaultPath?: string;
  // TODO: Better way to expose these global types maybe add to index.d.ts
  type: 'model' | 'lora' | 'lycoris';
};

export function PathInput(props: PathInputProps) {
  const [dir, setDir] = useState<string | null>(null);
  const { selectDirectory, setDirectory } = useApi();
  const { modelDirectories } = useElectron();

  async function getDir() {
    const selectedDir = await selectDirectory();
    const directory = selectedDir !== null && selectedDir !== undefined ? selectedDir : '';

    setDir(directory);
    setDirectory(props.type, directory);
  }

  return (
    <div className="overflow-hidden">
      <div className="w-full flex flex-row justify-between gap-4 items-center">
        <div className="px-4 py-2 border bg-slate-700/20 rounded-lg overflow-hidden w-full">
          <p className="text-ellipsis overflow-hidden text-white/40 cursor-default">
            {dir || modelDirectories[props.type as keyof typeof modelDirectories] || props.defaultPath}
          </p>
        </div>
        <Button onClick={getDir}>
          <GoFileDirectory />
        </Button>
      </div>
    </div>
  );
}