"use client";

import { Button } from "@/components/ui/button";
import { BlurFade } from "@/components/magicui/blur-fade";
import Image from "next/image";

interface SimpleImageCTAProps {
  onGenerate: () => void;
  isGenerating: boolean;
  isDisabled?: boolean;
  selectedPreset?: string | null;
}

export function SimpleImageCTA({
  onGenerate,
  isGenerating,
  isDisabled,
  selectedPreset,
}: SimpleImageCTAProps) {
  const getButtonText = () => {
    if (isGenerating) return "Transforming...";
    if (selectedPreset) {
      return "Transform";
    }
    return "Select a Style Above";
  };

  return (
    <BlurFade className="my-8 text-center">
      <Button
        size="lg"
        onClick={onGenerate}
        disabled={isGenerating || isDisabled || !selectedPreset}
        className="group relative rounded-xl border border-gray-200/60 bg-gray-50/50 px-8 py-4 font-medium text-gray-700 shadow-sm backdrop-blur-sm transition-all duration-500 hover:border-gray-300/80 hover:bg-gray-100/50 hover:shadow-md disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-gray-200/60 disabled:hover:bg-gray-50/50"
      >
        <div className="flex items-center gap-3">
          <div className="relative">
            <Image
              src="/images/icon_only_purple_05.svg"
              alt="Transform icon"
              width={18}
              height={18}
              className={`transition-transform duration-500 ${
                isGenerating
                  ? "animate-spin"
                  : "group-hover:rotate-12 group-hover:scale-110"
              }`}
            />
          </div>
          <span className="text-sm tracking-wide">{getButtonText()}</span>
        </div>
      </Button>
    </BlurFade>
  );
}
