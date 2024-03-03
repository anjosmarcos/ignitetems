import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION } from "@storage/storageConfig";
import { groupsGetAll } from "./groupGetAll";

export async function groupCreate(newGroup: string){
    try{
        const storageGroup = await groupsGetAll()

        const storage = JSON.parse(JSON.stringify([...storageGroup, newGroup]))
        await AsyncStorage.setItem(GROUP_COLLECTION, storage);
    }catch(error){
        throw error;
    }
}