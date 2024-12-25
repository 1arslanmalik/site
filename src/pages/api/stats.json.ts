import type { APIRoute } from "astro";
import { getChannelStats } from "../../utils/getStats";

export const GET:APIRoute = async() => {
    const CHANNEL_ID = import.meta.env.CHANNEL_ID;
    const API_KEY = import.meta.env.API_KEY
    const stats = await getChannelStats(CHANNEL_ID, API_KEY)
    return new Response(JSON.stringify(stats))
}