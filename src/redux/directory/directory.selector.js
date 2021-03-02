import { createSelector } from 'reselect';

export const selectDirectorySections = createSelector(
    // Valor(es) do state que deve ser monitorado 
    (state) => state.directory,
    // Função de acionamento
    (directory) => directory.sections
)