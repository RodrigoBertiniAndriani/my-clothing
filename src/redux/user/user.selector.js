import { createSelector } from 'reselect';

export const selectCurrentUser = createSelector(
    // Valor(es) do state que deve ser monitorado 
    (state) => state.user,

    // Função de acionamento
    (user) => user.currentUser
)