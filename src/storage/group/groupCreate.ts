import AsyncStorage from '@react-native-async-storage/async-storage';

import { GROUP_COLLECTION } from '@storage/storageConfig';
import { groupsGetAll } from './groupGetAll';
import { AppError } from 'src/utils/AppError';

export async function groupCreate(newGroup: string) {
    try {
        const storedGroups = await groupsGetAll();
        const groupAlereadyExists = storedGroups.includes(newGroup); 
        
        if (groupAlereadyExists) {
            throw new AppError(`O Grupo ${newGroup} já existe.`);
        }else {
            const storage = JSON.stringify([...storedGroups, newGroup])
            await AsyncStorage.setItem(GROUP_COLLECTION, storage);
        }

    } catch (error) {
        throw error;
    }
}