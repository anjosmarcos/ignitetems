import { PLAYER_COLLECTION } from '@storage/storageConfig';

import { AppError } from 'src/utils/AppError';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { PlayerStorageDTO } from './PlayerStorageDTO'
import { groupCreate } from '@storage/group/groupCreate';
import { playerGetByGroup } from './playersGetByGroup';

export async function playerCreate(newPlayer: PlayerStorageDTO, group: string) {
    try{
        // @ignite-teams:players-rocket[...]
        // @ignite-teams:players-amigos[...]
        // @ignite-teams:players-familia[...]

        const storagePlayers = await playerGetByGroup(group)

        const playersAlreadyExists = storagePlayers.filter(player => player.name === newPlayer.name)

        if(playersAlreadyExists.length > 0) {
            throw new AppError('Já existe um jogador com esse nome')
        }

        const storage = JSON.stringify([...storagePlayers, newPlayer])

        await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, storage)
    }catch(error){
        throw (error)
    }
}