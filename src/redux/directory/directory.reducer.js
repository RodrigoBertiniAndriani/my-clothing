const INITIAL_STATE = {
    sections: [
        {
            id: 1,
            title: 'Hats',
            subtitle: 'MAIS...',
            imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
            linkUrl: 'shop/hats'
        },
        {
            id: 2,
            title: 'Jackets',
            subtitle: 'MAIS...',
            imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
            linkUrl: 'shop/jackets'
        },
        {
            id: 3,
            title: 'Sneakers',
            subtitle: 'MAIS...',
            imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
            linkUrl: 'shop/sneakers'
        },
        {
            id: 4,
            title: 'Womens',
            subtitle: 'MAIS...',
            imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
            size: 'large',
            linkUrl: 'shop/womens'
        },
        {
            id: 5,
            title: 'Mens',
            subtitle: 'MAIS...',
            imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
            size: 'large',
            linkUrl: 'shop/mens'
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