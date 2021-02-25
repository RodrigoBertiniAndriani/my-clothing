import React from 'react';

import './worker-item.styles.scss';

const WorkerItem = ({worker}) => (
    <div className="worker-item">
        <div className="header">
                {worker.first_name} {worker.last_name}
        </div>
        <div className="body">
            {worker.email}
            {(worker.gender === 'M') ? ' Masculino' : 'Feminino'}
            RG: {worker.rg}
            CPF: {worker.cpf}
            Status: {(worker.active === true) ? 'Ativo' : 'Inativo'}
        </div>
    </div>
)

export default WorkerItem;