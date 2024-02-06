import axios from "axios";
import { GolderLookupInput, GolferLookup } from "./handicapNetwork.model"
import config from "@/config";
import { jsonToFormData } from "@/utils";

const apiInstance = axios.create({
  baseURL: config.HANDICAP_NETWORK_ENDPOINT,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'User-Agent': 'PostmanRuntime/7.36.1',
    'Accept': '*/*',
  },
});

const GolferLookup = async (data: GolderLookupInput): Promise<GolferLookup> => {
  try {
    const formData = jsonToFormData(data);

    console.log(formData);

    const responseData: GolferLookup = await apiInstance.post('wp-admin/admin-ajax.php', formData, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Origin': 'https://www.handicaps.co.za',
        'Referer': 'https://www.handicaps.co.za/lookup-golfer/',
        'X-Requested-With': 'XMLHttpRequest',
      },
    });

    console.log(responseData);
    return responseData;
  } catch (error) {
    // Handle the error
    console.error('Error in GolferLookup:', error);
    throw error; // Rethrow the error if needed
  }
};

export {
  GolferLookup
}