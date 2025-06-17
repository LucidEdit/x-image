"use client";

import type React from "react";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { 
  Upload, 
  X, 
  Check, 
  BookOpen, 
  FileText, 
  Moon, 
  Sparkles,
  type LucideIcon 
} from "lucide-react";
import { useRef } from "react";
import { toast } from "sonner";
import { themes } from "@/text-to-image/themes";

const iconMap: Record<string, LucideIcon> = {
  BookOpen,
  FileText,
  Moon,
  Sparkles,
};

interface PresetSelectorProps {
  selectedPreset: string | null;
  onPresetChange: (preset: string) => void;
  uploadedImage: string | null;
  onImageUpload: (imageUrl: string) => void;
  onImageRemove: () => void;
  className?: string;
}

export function PresetSelector({
  selectedPreset,
  onPresetChange,
  uploadedImage,
  onImageUpload,
  onImageRemove,
  className,
}: PresetSelectorProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith("image/")) {
      toast.error("Please upload an image file");
      return;
    }

    // Validate file size (max 10MB)
    if (file.size > 10 * 1024 * 1024) {
      toast.error("Image must be smaller than 10MB");
      return;
    }

    // Create blob URL
    const imageUrl = URL.createObjectURL(file);
    onImageUpload(imageUrl);

    // Reset input
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className={cn("space-y-4", className)}>
      <RadioGroup
        value={selectedPreset || ""}
        onValueChange={onPresetChange}
        className="grid grid-cols-1 gap-3 sm:grid-cols-3"
      >
        {themes.map((theme) => {
          const Icon = iconMap[theme.icon] || FileText; // Fallback to FileText
          const isSelected = selectedPreset === theme.name;
          const isManifesto = theme.name === "manifesto";

          return (
            <div key={theme.name} className="relative">
              <RadioGroupItem
                value={theme.name}
                id={theme.name}
                className="peer sr-only"
              />
              <Label htmlFor={theme.name} className="block cursor-pointer">
                <Card
                  className={cn(
                    "group relative flex h-full flex-col items-center gap-2 overflow-hidden p-5 text-center transition-all duration-300 ease-out hover:shadow-md",
                    isSelected
                      ? "border-2 border-white shadow-lg ring-2 ring-white/20"
                      : "border-2 border-transparent hover:border-gray-300/50",
                  )}
                >
                  <div
                    className="absolute inset-0 z-0 transition-opacity duration-300"
                    style={{
                      backgroundImage: `url(${theme.backgroundImage})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                  <div className="absolute inset-0 z-0 bg-black/40 transition-opacity duration-300" />

                  <div
                    className={cn(
                      "absolute right-2 top-2 z-20 transition-all duration-300 ease-out",
                      isSelected
                        ? "translate-y-0 scale-100 opacity-100"
                        : "-translate-y-1 scale-75 opacity-0",
                    )}
                  >
                    <div className="rounded-full bg-white/20 p-1">
                      <Check className="size-4 text-white" />
                    </div>
                  </div>

                  <div className="relative z-10 flex flex-col items-center transition-transform duration-300 ease-out">
                    <div className="flex size-10 items-center justify-center">
                      <Icon className="size-5 text-white" />
                    </div>

                    <div className="space-y-1">
                      <div className="font-medium text-white">
                        {theme.label}
                      </div>
                      <div className="text-xs text-white/80">
                        {theme.description}
                      </div>
                    </div>

                    {/* Image upload for manifesto */}
                    {isManifesto && (
                      <div
                        className={cn(
                          "w-full space-y-3 overflow-hidden transition-all duration-300 ease-out",
                          isSelected
                            ? "mt-2 max-h-20 translate-y-0 opacity-100"
                            : "mt-0 max-h-0 -translate-y-2 opacity-0",
                          uploadedImage && isSelected ? "pr-2 pt-2" : "",
                        )}
                        onClick={(e) => e.stopPropagation()}
                      >
                        {uploadedImage ? (
                          <div className="relative transition-all duration-200 ease-out">
                            <div className="overflow-hidden rounded-lg border border-gray-200 bg-gray-50 transition-all duration-200">
                              <img
                                src={uploadedImage || "/placeholder.svg"}
                                alt="Uploaded header image"
                                className="h-14 w-full object-contain transition-all duration-200"
                              />
                            </div>
                            <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              className="absolute -right-2 -top-2 size-6 rounded-full bg-white p-0 shadow-md transition-all duration-200 hover:bg-gray-50 hover:shadow-lg"
                              onClick={onImageRemove}
                            >
                              <X className="size-3 text-gray-500" />
                            </Button>
                          </div>
                        ) : (
                          <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            className="w-full gap-2 border-white/20 bg-white/10 text-xs text-white transition-all duration-200 hover:border-white/30 hover:bg-white/20"
                            onClick={handleUploadClick}
                          >
                            <Upload className="size-3" />
                            Add Header Image
                          </Button>
                        )}
                      </div>
                    )}
                  </div>
                </Card>
              </Label>
            </div>
          );
        })}
      </RadioGroup>

      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="hidden"
      />
    </div>
  );
}
