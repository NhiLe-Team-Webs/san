import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

interface SubscriptionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SubscriptionModal = ({ isOpen, onClose }: SubscriptionModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    city: "",
    ageGroup: "",
    gender: "",
    journey: "",
    interests: [] as string[],
    format: [] as string[],
    frequency: "",
    channel: [] as string[]
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Welcome to the Sisterhood!",
      description: "Thank you for subscribing! Please check your email for a welcome gift.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      city: "",
      ageGroup: "",
      gender: "",
      journey: "",
      interests: [],
      format: [],
      frequency: "",
      channel: []
    });
    
    onClose();
  };

  const handleCheckboxChange = (field: 'interests' | 'format' | 'channel', value: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: checked 
        ? [...prev[field], value]
        : prev[field].filter(item => item !== value)
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div className="fixed inset-0 bg-black/50 transition-opacity" onClick={onClose} />
      
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white w-11/12 md:max-w-2xl rounded-lg shadow-xl z-50 max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex justify-between items-center pb-3 border-b">
            <h2 className="text-2xl font-bold">Join the Sisterhood!</h2>
            <button onClick={onClose} className="hover:bg-secondary rounded-full p-1">
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6 mt-6">
            {/* Basic Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Tên*</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <Label htmlFor="email">Email*</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              <div>
                <Label htmlFor="city">Thành phố/Tỉnh*</Label>
                <Input
                  id="city"
                  value={formData.city}
                  onChange={(e) => setFormData(prev => ({ ...prev, city: e.target.value }))}
                  placeholder="e.g., Ho Chi Minh City"
                  required
                />
              </div>
              <div>
                <Label htmlFor="ageGroup">Nhóm tuổi*</Label>
                <Select 
                  value={formData.ageGroup} 
                  onValueChange={(value) => setFormData(prev => ({ ...prev, ageGroup: value }))}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select your age group" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="under_18">&lt;18</SelectItem>
                    <SelectItem value="18_24">18-24</SelectItem>
                    <SelectItem value="25_34">25-34</SelectItem>
                    <SelectItem value="35_44">35-44</SelectItem>
                    <SelectItem value="45_plus">45+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Gender */}
            <div>
              <Label>Giới tính*</Label>
              <RadioGroup
                value={formData.gender}
                onValueChange={(value) => setFormData(prev => ({ ...prev, gender: value }))}
                className="flex gap-6 mt-2"
                required
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="female" id="female" />
                  <Label htmlFor="female">Nữ</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="male" id="male" />
                  <Label htmlFor="male">Nam</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="other" id="other" />
                  <Label htmlFor="other">Khác</Label>
                </div>
              </RadioGroup>
            </div>

            <hr />

            {/* Journey */}
            <div>
              <Label>Hành trình hiện tại của bạn là?</Label>
              <RadioGroup
                value={formData.journey}
                onValueChange={(value) => setFormData(prev => ({ ...prev, journey: value }))}
                className="grid grid-cols-2 gap-2 mt-2"
              >
                {[
                  { value: "student", label: "Sinh viên" },
                  { value: "new_worker", label: "Mới đi làm" },
                  { value: "advancing", label: "Đang thăng tiến" },
                  { value: "established", label: "Đã ổn định" }
                ].map((option) => (
                  <Label 
                    key={option.value}
                    htmlFor={option.value}
                    className="p-3 border rounded-lg text-center cursor-pointer hover:bg-secondary flex items-center justify-center"
                  >
                    <RadioGroupItem value={option.value} id={option.value} className="sr-only" />
                    {option.label}
                  </Label>
                ))}
              </RadioGroup>
            </div>

            {/* Submit Button */}
            <div className="pt-4 border-t">
              <Button type="submit" variant="cta" size="lg" className="w-full">
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};