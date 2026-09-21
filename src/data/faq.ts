export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface FAQCategory {
  id: string;
  name: string;
  items: FAQItem[];
}

export const faqData: FAQCategory[] = [
  {
    id: "ordering",
    name: "Ordering and quotes",
    items: [
      {
        id: "o1",
        question: "Do you offer Cash on Delivery (COD)?",
        answer: "Yes. For standard sizes, we offer 100% Cash on Delivery anywhere in Tamil Nadu. For custom sizes, we require a small advance token to begin production, with the balance paid on delivery."
      },
      {
        id: "o2",
        question: "How do I get a quote for a custom bed?",
        answer: "Use the 'Custom Size Builder' on our website or click 'Get a quote' in the navigation. You can also send us a WhatsApp message with your bed's dimensions and we will reply with an exact price instantly."
      },
      {
        id: "o3",
        question: "Can I try the mattress before buying?",
        answer: "We do not offer a sleep trial at home, but we strongly encourage you to visit our Chinniyampalayam manufacturing unit. You can lie on every material layer and see exactly how your mattress will be built before you place an order."
      }
    ]
  },
  {
    id: "custom",
    name: "Custom sizes",
    items: [
      {
        id: "c1",
        question: "Can you make odd shapes or round mattresses?",
        answer: "Yes. If your carpenter has built a unique bed with angled corners, curves, or specific cutouts for pillars, we can template it. Just contact us via WhatsApp to arrange a measurement visit."
      },
      {
        id: "c2",
        question: "How long does a custom size take to make?",
        answer: "Because we manufacture everything in our own Coimbatore unit, custom sizes typically take 2-4 working days to craft, depending on the complexity of the layers."
      }
    ]
  },
  {
    id: "delivery",
    name: "Delivery and installation",
    items: [
      {
        id: "d1",
        question: "Do you deliver across Tamil Nadu?",
        answer: "Yes, we handle our own logistics and deliver across Tamil Nadu. Delivery within Coimbatore district is usually free. For other districts, a nominal fuel charge may apply depending on the order size."
      },
      {
        id: "d2",
        question: "Will you carry the mattress upstairs?",
        answer: "Yes. Our delivery team will carry the mattress to your bedroom, unbox it, and place it on your bed frame. They will take away all the plastic packaging so you don't have to deal with it."
      },
      {
        id: "d3",
        question: "Do you take away old mattresses?",
        answer: "We do not currently offer old mattress disposal services, as we do not refurbish or use old materials. We recommend contacting local recyclers or donating it if it's still in usable condition."
      }
    ]
  },
  {
    id: "warranty",
    name: "Warranty",
    items: [
      {
        id: "w1",
        question: "How long is your warranty?",
        answer: "Our warranties range from 2 to 10 years depending on the core material. 100% Natural Latex models carry a 10-year warranty against sagging, while rubberised coir models carry a 2-year warranty."
      },
      {
        id: "w2",
        question: "How do I claim a warranty issue?",
        answer: "Just send us a WhatsApp message with a photo of your invoice and the issue. We will send our team to inspect the mattress. If it falls under warranty, we will bring it back to our unit for repair or replacement."
      }
    ]
  },
  {
    id: "returns",
    name: "Returns",
    items: [
      {
        id: "r1",
        question: "Can I return my mattress?",
        answer: "Standard-size mattresses can be returned within 3 days if they are completely unused, undamaged, and in original condition. Custom-size mattresses cannot be returned as they are made exclusively to fit your bed."
      },
      {
        id: "r2",
        question: "Is there a pickup fee for returns?",
        answer: "Yes, if you choose to return a standard mattress, a logistics fee will be deducted from your refund to cover the pickup cost, unless you bring the mattress back to our unit yourself."
      }
    ]
  },
  {
    id: "care",
    name: "Care",
    items: [
      {
        id: "ca1",
        question: "Should I flip my mattress?",
        answer: "No. Most of our mattresses are built with a specific top-down layer structure (e.g., firm support on the bottom, soft latex on top). You should rotate it 180 degrees every 3 months, but do not flip it upside down."
      },
      {
        id: "ca2",
        question: "Can I wash the cover?",
        answer: "Our zippered covers can be dry-cleaned. Do not machine wash them at home as the fabric may shrink, making it impossible to put back onto the foam core. We highly recommend using a waterproof protector to avoid needing to clean the main cover."
      }
    ]
  },
  {
    id: "bulk",
    name: "Bulk orders",
    items: [
      {
        id: "b1",
        question: "Do you supply hotels and hostels?",
        answer: "Yes. We have dedicated B2B product lines designed specifically for commercial use, offering high durability and fire-retardant options. Visit our Bulk Orders page to submit your requirements."
      }
    ]
  }
];
