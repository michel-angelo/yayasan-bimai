import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = (supabaseUrl && supabaseKey)
  ? createClient(supabaseUrl, supabaseKey)
  : null;

export interface DonationRecord {
  id?: number;
  merchant_order_id: string;
  jenis_donasi: string; // e.g. 'wakaf-quran-braille', 'sedekah-subuh', 'operasional', 'sedekah-umum'
  donor_name: string;
  phone?: string | null;
  amount: number;
  payment_method: string;
  wakif_name?: string | null;
  niat?: string | null;
  status_payment: "pending" | "success" | "failed";
  payment_code?: string | null;
  payment_reference?: string | null;
  created_at?: string;
}

export async function saveDonationToSupabase(record: DonationRecord) {
  if (!supabase) return null;
  try {
    const { data, error } = await supabase.from("donations").insert([record]).select();
    if (error) {
      console.warn("Supabase insert warning:", error.message);
      return null;
    }
    return data;
  } catch (err) {
    console.error("Supabase insert error:", err);
    return null;
  }
}

export async function updateDonationStatusInSupabase(merchantOrderId: string, status: "success" | "failed") {
  if (!supabase) return null;
  try {
    const { data, error } = await supabase
      .from("donations")
      .update({ status_payment: status })
      .eq("merchant_order_id", merchantOrderId)
      .select();
    if (error) {
      console.warn("Supabase status update warning:", error.message);
      return null;
    }
    return data;
  } catch (err) {
    console.error("Supabase status update error:", err);
    return null;
  }
}
