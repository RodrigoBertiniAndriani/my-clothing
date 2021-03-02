const INITIAL_STATE = {
    sections: [
        {
            id: 1,
            title: 'Produtos',
            subtitle: 'MAIS...',
            imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
            linkUrl: 'produtos'
        },
        {
            id: 2,
            title: 'Serviços',
            subtitle: 'MAIS...',
            imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
            linkUrl: 'servicos'
        },
        {
            id: 3,
            title: 'Tecnologia',
            subtitle: 'MAIS...',
            imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
            linkUrl: 'tecnologia'
        },
        {
            id: 4,
            title: 'Quem somos',
            subtitle: 'MAIS...',
            imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
            size: 'large',
            linkUrl: 'quemsomos'
        },
        {
            id: 5,
            title: 'Notícias',
            subtitle: 'MAIS...',
            imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
            size: 'large',
            linkUrl: 'noticias'
        },
    ]
}

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        default:
            return state;
    }
}

export default directoryReducer;