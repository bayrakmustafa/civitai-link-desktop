import { FaCog } from 'react-icons/fa';
import { Button } from '@/components/ui/button';

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Checkbox } from '../ui/checkbox';
import { Label } from '../ui/label';
import { PathInput } from '../path-input';

export function HeaderTop() {
  return (
    <Sheet>
      <div className="flex items-center">
        <div className="ml-auto flex items-center space-x-4">
          <div>
            <SheetTrigger>
              <FaCog size={18} className="cursor-pointer" />
            </SheetTrigger>
          </div>
        </div>
      </div>
      <SheetContent className="w-full overflow-y-scroll">
        <SheetHeader>
          <SheetTitle>Settings</SheetTitle>
        </SheetHeader>
        <div className="grid gap-4 my-4">
          <div className="flex items-center space-x-2">
            <Checkbox id="download_missing_preview" />
            <Label htmlFor="download_missing_preview">Download missing preview images on startup</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="download_missing_activation" />
            <Label htmlFor="download_missing_activation">Download missing activation triggers on startup</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="download_missing_nsfw_preview" />
            <Label htmlFor="download_missing_nsfw_preview">Download NSFW (adult) preview images</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="download_missing_models" />
            <Label htmlFor="download_missing_models">
              Download missing models upon reading generation parameters from prompt
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="include_hashes" />
            <Label htmlFor="include_hashes">
              Include resource hashes in image metadata (for resource auto-detection on Civitai)
            </Label>
          </div>
          <PathInput defaultPath="Root Models Directory" type="model" />
          <PathInput defaultPath="LoRA Directory" type="lora" />
          <PathInput defaultPath="LyCORIS Directory" type="lycoris" />
        </div>
      </SheetContent>
    </Sheet>
  );
}