import axios from "axios";

export async function getChannelStats(channelId, API_KEY) {
    try {
        const response = await axios.get(`https://www.googleapis.com/youtube/v3/channels`, {
            params: {
                part: 'statistics',
                id: channelId,
                key: API_KEY
            }
        });

        if (response.data.items && response.data.items.length > 0) {
            const stats = response.data.items[0].statistics;
            return stats
        } else {
            console.error('Channel not found or no statistics available');
        }
    } catch (error) {
        console.error('Error fetching channel stats:', error);
    }
}