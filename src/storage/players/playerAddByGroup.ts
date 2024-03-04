import { PLAYER_COLLECTION } from '@storage/storageConfig';

import { AppError } from 'src/utils/AppError';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { PlayerStorageDTO } from './PlayerStorageDTO'
import { groupCreate } from '@storage/group/groupCreate';

export async function playerCreate(newPlayer: PlayerStorageDTO, group: string) {
    try{
        // @ignite-teams:players-rocket[...]
        // @ignite-teams:players-amigos[...]
        // @ignite-teams:players-familia[...]
        await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`,'')
    }catch(error){
        throw (error)
    }
}