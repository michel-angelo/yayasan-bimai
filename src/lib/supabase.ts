import { createClient } from "@supabase/supabase-js";

const rawUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseUrl = rawUrl ? rawUrl.replace(/\/rest\/v1\/?$/, "") : "";
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

export async function getCampaignData(jenisDonasi?: string) {
  const targetAmount = 50000000;
  let collectedAmount = 8250000;
  let donorsCount = 10;
  let donorsList: Array<{ donor_name: string; wakif_name: string; amount: number; niat: string; created_at: string }> = [];

  if (supabase) {
    try {
      let query = supabase
        .from("donations")
        .select("donor_name, wakif_name, amount, niat, created_at, status_payment, jenis_donasi")
        .eq("status_payment", "success");

      if (jenisDonasi) {
        query = query.eq("jenis_donasi", jenisDonasi);
      }

      const { data, error } = await query;
      if (error) throw error;

      if (data && data.length > 0) {
        collectedAmount = data.reduce((sum, item) => sum + Number(item.amount), 0);
        donorsCount = data.length;
        donorsList = data
          .map((d) => ({
            donor_name: d.donor_name || "Hamba Allah",
            wakif_name: d.wakif_name || "",
            amount: Number(d.amount),
            niat: d.niat || "",
            created_at: d.created_at,
          }))
          .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
      }
    } catch (err) {
      console.warn("Gagal mengambil data kampanye dari Supabase:", err);
    }
  }

  return {
    collectedAmount,
    donorsCount,
    donorsList,
    targetAmount,
  };
}
