import axios from "axios";

const apiClient = axios.create({
    baseURL: process.env.VUE_APP_DISTANCE_API_URL,
    withCredentials: false,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
    }
});

export async function getSummary() {
    const response = await apiClient.get("/summary");
    return response.data;
}
