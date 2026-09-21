"use client";
import React, { useState } from "react";
import { PrimaryButton } from "./Buttons";

export default function B2BForm() {
  const [formData, setFormData] = useState({
    orgName: "",
    contactPerson: "",
    phone: "+91 ",
    buyerType: "Hotel/Resort",
    quantity: "",
    sizes: "",
    preference: "",
    pincode: "",
    targetDate: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleWhatsAppRedirect = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `*New Bulk/B2B Enquiry*
    
*Organisation:* ${formData.orgName}
*Contact:* ${formData.contactPerson}
*Phone:* ${formData.phone}
*Segment:* ${formData.buyerType}

*Requirements:*
- Quantity: ${formData.quantity}
- Sizes: ${formData.sizes}
- Material Preference: ${formData.preference}

*Logistics:*
- Delivery Pincode: ${formData.pincode}
- Target Date: ${formData.targetDate}`;

    window.open(`https://wa.me/919600889334?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <form onSubmit={handleWhatsAppRedirect} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="flex flex-col gap-1">
          <label className="font-label-form text-slate text-sm">Organisation name</label>
          <input 
            required
            type="text" 
            name="orgName"
            value={formData.orgName}
            onChange={handleChange}
            className="h-12 w-full rounded-lg border border-hairline bg-surface-white px-4 text-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
            placeholder="e.g. The Residency Group"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="font-label-form text-slate text-sm">Type of buyer</label>
          <select 
            name="buyerType"
            value={formData.buyerType}
            onChange={handleChange}
            className="h-12 w-full rounded-lg border border-hairline bg-surface-white px-4 text-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
          >
            <option value="Hotel/Resort">Hotel / Resort</option>
            <option value="Hostel/PG">Hostel / PG</option>
            <option value="Hospital/Nursing Home">Hospital / Nursing Home</option>
            <option value="Builder/Project">Builder / Project</option>
            <option value="Interior Designer">Interior Designer / Architect</option>
            <option value="Furniture Dealer">Furniture Dealer</option>
            <option value="School/College">School / College</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="flex flex-col gap-1">
          <label className="font-label-form text-slate text-sm">Contact person</label>
          <input 
            required
            type="text" 
            name="contactPerson"
            value={formData.contactPerson}
            onChange={handleChange}
            className="h-12 w-full rounded-lg border border-hairline bg-surface-white px-4 text-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="font-label-form text-slate text-sm">Phone number</label>
          <input 
            required
            type="tel" 
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="h-12 w-full rounded-lg border border-hairline bg-surface-white px-4 text-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="flex flex-col gap-1">
          <label className="font-label-form text-slate text-sm">Estimated quantity</label>
          <input 
            required
            type="number" 
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            min="1"
            className="h-12 w-full rounded-lg border border-hairline bg-surface-white px-4 text-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
            placeholder="e.g. 50"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="font-label-form text-slate text-sm">Thickness / Material preference</label>
          <input 
            type="text" 
            name="preference"
            value={formData.preference}
            onChange={handleChange}
            className="h-12 w-full rounded-lg border border-hairline bg-surface-white px-4 text-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
            placeholder="e.g. 6 inch Foam, firm"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <label className="font-label-form text-slate text-sm">Sizes required</label>
        <textarea 
          required
          name="sizes"
          value={formData.sizes}
          onChange={handleChange}
          rows={3}
          className="w-full rounded-lg border border-hairline bg-surface-white p-4 text-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
          placeholder="e.g. 20 Queen, 30 Single. If you have a custom schedule, paste it here."
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="flex flex-col gap-1">
          <label className="font-label-form text-slate text-sm">Delivery pincode</label>
          <input 
            required
            type="text" 
            name="pincode"
            value={formData.pincode}
            onChange={handleChange}
            className="h-12 w-full rounded-lg border border-hairline bg-surface-white px-4 text-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="font-label-form text-slate text-sm">Target delivery date</label>
          <input 
            type="date" 
            name="targetDate"
            value={formData.targetDate}
            onChange={handleChange}
            className="h-12 w-full rounded-lg border border-hairline bg-surface-white px-4 text-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
          />
        </div>
      </div>
      
      <div className="flex flex-col gap-1 opacity-60">
        <label className="font-label-form text-slate text-sm flex items-center gap-2">
          <span className="material-symbols-outlined text-[16px]">upload_file</span>
          Upload a specification or BOQ (Optional)
        </label>
        <input 
          disabled
          type="file" 
          className="h-12 w-full rounded-lg border border-dashed border-hairline bg-surface-container px-4 py-2 text-sm text-slate cursor-not-allowed"
        />
        <span className="text-xs text-slate mt-1">File uploads are captured directly on WhatsApp. Just send the file after clicking submit.</span>
      </div>

      <div className="mt-4 flex flex-col gap-4">
        <PrimaryButton type="submit" className="w-full justify-center !h-14 font-semibold text-base">
          Send requirement to WhatsApp
        </PrimaryButton>
        
        <p className="text-center font-caption text-slate">
          Prefer to call? Speak directly to our institutional sales lead: <a href="tel:9600889334" className="font-medium text-primary hover:underline">96008 89334</a>
        </p>
      </div>

    </form>
  );
}
