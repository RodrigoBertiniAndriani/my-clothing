import React from 'react';

import './worker-item.styles.scss';

const WorkerItem = ({user}) => (
    <div className="worker-item">
        <div className="header">
                {user.first_name} {user.last_name}
        </div>
        <div className="body">
            {user.email}
            {(user.gender === 'M') ? ' Masculino' : 'Feminino'}
            RG: {user.rg}
            CPF: {user.cpf}
            Status: {(user.active === true) ? 'Ativo' : 'Inativo'}
        </div>

    </div>
)

export default WorkerItem;