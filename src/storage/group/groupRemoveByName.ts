import AsyncStorage from "@react-native-async-storage/async-storage"
import { groupsGetAll } from "./groupGetAll"
import { GROUP_COLLECTION, PLAYER_COLLECTION } from "@storage/storageConfig"

export async function groupRemoveByName(groupDeleted: string){
    try{
        const storageGroups = await groupsGetAll()
        const group = storageGroups.filter(group => group !== groupDeleted)

        await AsyncStorage.setItem(GROUP_COLLECTION, JSON.stringify(group)) // deletado o grupo
        await AsyncStorage.removeItem(`${PLAYER_COLLECTION}-${groupDeleted}`) // deletado os jogadores do grupo


    }catch (error){
        throw (error)
    }
}