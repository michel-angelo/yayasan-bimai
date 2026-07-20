import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = (supabaseUrl && supabaseKey)
  ? createClient(supabaseUrl, supabaseKey)
  : null;

export interface DonationRecord {
  id?: string;
  order_id: string;
  program_type: string; // e.g. 'wakaf-quran-braille', 'sedekah-subuh', 'operasional', 'umum'
  program_name: string;
  donor_name: string;
  phone?: string | null;
  email?: string | null;
  amount: number;
  payment_method: string;
  wakif_name?: string | null;
  doa?: string | null;
  payment_status: "PENDING" | "SUCCESS" | "FAILED" | "EXPIRED";
  reference_id?: string | null;
  qr_string?: string | null;
  va_number?: string | null;
  created_at?: string;
  updated_at?: string;
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

export async function updateDonationStatusInSupabase(orderId: string, status: "SUCCESS" | "FAILED" | "EXPIRED") {
  if (!supabase) return null;
  try {
    const { data, error } = await supabase
      .from("donations")
      .update({ payment_status: status, updated_at: new Date().toISOString() })
      .eq("order_id", orderId)
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
