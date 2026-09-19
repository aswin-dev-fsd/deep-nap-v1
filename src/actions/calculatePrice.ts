"use server";

export async function calculateIndicativePrice(length: number, width: number, thickness: number): Promise<number> {
  // This is a server-side action, meaning the formula is hidden from the client.
  // The indicative pricing formula provided by the prompt: L * W * T * 0.76 (rounded to nearest 100)
  
  if (!length || !width || !thickness) return 0;
  
  const rawPrice = length * width * thickness * 0.76;
  const roundedPrice = Math.round(rawPrice / 100) * 100;
  
  return roundedPrice;
}
